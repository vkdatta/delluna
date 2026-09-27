export const name="floppy-disk-back-fill";
export const id="dl_8e0f51c471634bf28da2";
export const url=new URL("../icons/floppy-disk-back-fill.svg?v=c2e476ecab9a3e3ee720d55fd4fda0bb38fb32f396f96757faa0bc963a6b6bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
