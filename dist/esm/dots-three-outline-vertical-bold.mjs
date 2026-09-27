export const name="dots-three-outline-vertical-bold";
export const id="dl_e96ae3f0d80c43f89431";
export const url=new URL("../icons/dots-three-outline-vertical-bold.svg?v=ac013347b6202b87e9ec44aad095d6201888b3e69a1825fb474d19739a7b96b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
