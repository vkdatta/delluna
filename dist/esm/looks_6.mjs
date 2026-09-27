export const name="looks_6";
export const id="dl_b85f4b7bcb504b216653";
export const url=new URL("../icons/looks_6.svg?v=efc969b761638d55346bf05ff3bae4b1bfb8ed743f3af03babbdbedfbe4992d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
