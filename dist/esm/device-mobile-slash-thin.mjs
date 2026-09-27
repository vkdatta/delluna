export const name="device-mobile-slash-thin";
export const id="dl_4f1b8ddf35d1448c9e89";
export const url=new URL("../icons/device-mobile-slash-thin.svg?v=d9273a97cbd64229e2898538d0223d73505174e9a30d9065230c7cb26345dc01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
