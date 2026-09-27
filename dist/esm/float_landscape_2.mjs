export const name="float_landscape_2";
export const id="dl_ad660f162f9479145455";
export const url=new URL("../icons/float_landscape_2.svg?v=11cab0967cc69be91c115c87483392436c498ca28a8b422e7f54df361d066f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
