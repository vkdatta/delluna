export const name="media_output_off-fill";
export const id="dl_6abe98986c088d14fec4";
export const url=new URL("../icons/media_output_off-fill.svg?v=ae34967e70525022ce5dfe123ad44018179b8b60291070aaed986df5a67db7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
