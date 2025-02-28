function savePoetry() {
    const poetryContent = document.getElementById('poetryEditor').innerText;
    
    const blob = new Blob([poetryContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `أشعار-${new Date().toLocaleDateString()}.txt`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}