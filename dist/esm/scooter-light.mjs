export const name="scooter-light";
export const id="dl_9c3e4cdd21fa4834acb6";
export const url=new URL("../icons/S/scooter-light.svg?v=ef3735e12901633ffd3acc69390f6b90a114daa05e9748a2744f0c24b64e73d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
