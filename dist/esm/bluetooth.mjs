export const name="bluetooth";
export const id="dl_5b434b37345f46aba29b";
export const url=new URL("../icons/bluetooth.svg?v=77a9a54215fe9111cd36437b5921e8a8b60657ccebb6d1e0a47aee185052d377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
