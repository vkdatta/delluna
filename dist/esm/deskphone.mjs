export const name="deskphone";
export const id="dl_d1575007772143bca8a8";
export const url=new URL("../icons/deskphone.svg?v=ac1bff14d4862cff4fbb7bc4db4590df7a47d95f09736b6d80e621c473ba18ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
