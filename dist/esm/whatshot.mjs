export const name="whatshot";
export const id="dl_dc28b00ad83a4d8b8cd5";
export const url=new URL("../icons/W/whatshot.svg?v=23d1baff5f9cbe4830da7edf80e34a14a2c0fc8a430b6fc3b44561984adcbc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
