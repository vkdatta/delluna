export const name="file-md-fill";
export const id="dl_7308cc0789dc42a899f2";
export const url=new URL("../icons/file-md-fill.svg?v=f0b31b356c09e86ed349537fbcfcb379bcb2ad69342e02e588869de99b5f5bbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
