export const name="lucid_3-pencil";
export const id="dl_d9012e6e9d60493abfa9";
export const url=new URL("../icons/lucid_3-pencil.svg?v=398461b031f0fcfbcb076ccc39d506d082b1b235ce8e2df510975be39f48d505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
