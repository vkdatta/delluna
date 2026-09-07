export const name="text-italic";
export const id="dl_47edb76639df44f28e1d";
export const url=new URL("../icons/T/text-italic.svg?v=189d5093097bb07a2894efb0221ffe5054617163c97eb5f73b79cbee375161c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
