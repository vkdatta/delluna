export const name="call";
export const id="dl_a94e4f9d87499346b4a7";
export const url=new URL("../icons/call.svg?v=e33c682aad3a61bcbc9087a4f0d77eaa42d64bf3d4736607b7ce133ebbba1918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
