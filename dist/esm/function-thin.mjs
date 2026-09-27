export const name="function-thin";
export const id="dl_bb5df4d82a2b4d46949a";
export const url=new URL("../icons/function-thin.svg?v=e840ed2c65447344a1602d06d9a160b999d80bb96917101fbc008912c5f0ee78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
