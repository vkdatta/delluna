export const name="notepad";
export const id="dl_a2f83f76fb014596839c";
export const url=new URL("../icons/notepad.svg?v=36c58179dd6195de452d9067d14cd8b15f2010dfeefb3edc922819fa34f14291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
