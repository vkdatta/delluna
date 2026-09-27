export const name="windshield_defrost_rear";
export const id="dl_a5ac6a6aab8e6984a0f7";
export const url=new URL("../icons/windshield_defrost_rear.svg?v=cde15c3acc45af68e266853cda9f22fa06d27c6a28e1a6fd06c315bb3c0a4e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
