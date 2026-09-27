export const name="woman_2-fill";
export const id="dl_680c641a6e2a23379f13";
export const url=new URL("../icons/woman_2-fill.svg?v=26974347aa6f1812a38da6bb65dc39d208848874aec95e65d79120798a0695aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
