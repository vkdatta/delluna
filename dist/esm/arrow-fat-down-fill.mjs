export const name="arrow-fat-down-fill";
export const id="dl_a0403ce18b6145a0bd6e";
export const url=new URL("../icons/arrow-fat-down-fill.svg?v=c0dbe6fc9467ffe98a4d5fa5904fac45e9f1c12562bb863bfa15b86fee947c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
