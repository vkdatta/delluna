export const name="chromecast_2-fill";
export const id="dl_52b1944e337ce7e8626d";
export const url=new URL("../icons/chromecast_2-fill.svg?v=dd638857eb004b7af7eda8d1b73d2686a77ee081eb7e037a18c3dd17aef2019e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
