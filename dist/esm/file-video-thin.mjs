export const name="file-video-thin";
export const id="dl_987b715a184148a48cd4";
export const url=new URL("../icons/file-video-thin.svg?v=8087ffc574e47c96f582186e8b0850779a2eb239a1d4680d4a3b70bccd688baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
