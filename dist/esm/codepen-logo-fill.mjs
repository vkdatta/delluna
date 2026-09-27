export const name="codepen-logo-fill";
export const id="dl_f9555d8e5ff142a9823d";
export const url=new URL("../icons/codepen-logo-fill.svg?v=40e8243dcc415348552fbcd818f2afa030059b6a68abaed43bc716f586dc6445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
