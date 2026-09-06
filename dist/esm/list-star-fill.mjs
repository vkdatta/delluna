export const name="list-star-fill";
export const id="dl_bff78b2ecf1c4545a6cd";
export const url=new URL("../icons/list-star-fill.svg?v=b710f10c4b4803d8a30455da7c01a7d045826ec24d715dd6f2739aad6fc430ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
