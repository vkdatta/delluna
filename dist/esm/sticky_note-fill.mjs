export const name="sticky_note-fill";
export const id="dl_d5f9e88403e7c1436f69";
export const url=new URL("../icons/sticky_note-fill.svg?v=8f07e514e0748bda4249d53bade583cee104e9ece1983de9c2dd31e7a030a524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
