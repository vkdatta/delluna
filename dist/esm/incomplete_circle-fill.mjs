export const name="incomplete_circle-fill";
export const id="dl_1b044d42c8130bc66771";
export const url=new URL("../icons/incomplete_circle-fill.svg?v=e24041502aa178ce68f111fa432626362505853c67a51134daf70b56e2869602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
