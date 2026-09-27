export const name="instagram-logo-thin";
export const id="dl_37afefa72ec74e2b889b";
export const url=new URL("../icons/instagram-logo-thin.svg?v=38079ef4c0b4fc6621a948b812696fa7abae925a0e8a8897744536f0ca70505a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
