export const name="add_alert-fill";
export const id="dl_3933bf4cc459920351d7";
export const url=new URL("../icons/add_alert-fill.svg?v=84ffc39d9ed1d11c770a83d8ca96c6fac8d27eed4b583eedeb1b4e6573e6d7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
