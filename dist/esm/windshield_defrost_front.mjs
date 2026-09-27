export const name="windshield_defrost_front";
export const id="dl_428e2ac8b496bc2bf530";
export const url=new URL("../icons/windshield_defrost_front.svg?v=00a5366843fbd2f6d04ebebbecd5cf14cacc986d42805347efd98d38e4f5674e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
