export const name="dining-fill";
export const id="dl_59748e9fbe1edd5d05d4";
export const url=new URL("../icons/dining-fill.svg?v=3fcdcdfacb37a60bc64ff1bd73cc8636fb5bf61b14b06a69f6b62203fe82f8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
