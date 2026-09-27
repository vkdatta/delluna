export const name="linkedin-logo";
export const id="dl_6b90fbedac2840518f28";
export const url=new URL("../icons/linkedin-logo.svg?v=58d7c204edbaa65b32a21288e85db87cdb63adb7345291d8e6310bf8d8e163c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
