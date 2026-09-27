export const name="arrow-circle-right-bold";
export const id="dl_44bd886c09f64f21b83a";
export const url=new URL("../icons/arrow-circle-right-bold.svg?v=48489cb77b4efd119cb5029d9460d5dad2797d8742b41c2e45aeac8c78e1e010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
