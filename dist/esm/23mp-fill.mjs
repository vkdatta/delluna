export const name="23mp-fill";
export const id="dl_0e8824c041fd999909f0";
export const url=new URL("../icons/23mp-fill.svg?v=6ca2e37d21498f3d46a072ad6e492b91e0a5981ddcba8f535f0fa5f3ea1d37ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
