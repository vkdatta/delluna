export const name="device-tablet";
export const id="dl_bdd2f2e94244401484d0";
export const url=new URL("../icons/device-tablet.svg?v=3fba15d04a76e6b9d19b7a1ac85d7a69f33b01bae3cc7e8d416501734de6fe80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
