export const name="padding-fill";
export const id="dl_d3bf6445e93f49170a50";
export const url=new URL("../icons/padding-fill.svg?v=7820f079a7aeb51107b043f960e36a30f8c56613968fc8361db5203bf18a4936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
