export const name="pause_presentation";
export const id="dl_d5a1955d52d749066312";
export const url=new URL("../icons/pause_presentation.svg?v=bc2a0e7b7f214048b1560bf5e507e0012e6712e9a94e40a49ed90b11dce9ee6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
