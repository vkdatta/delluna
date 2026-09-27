export const name="radio-button";
export const id="dl_fa32e6af89454f4ba3be";
export const url=new URL("../icons/radio-button.svg?v=dc917bda25e446c12e4b91ab1096b96022cf67835c45d468fdf861933aeb2f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
