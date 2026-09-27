export const name="medal-thin";
export const id="dl_d2269b3bc50045009be6";
export const url=new URL("../icons/medal-thin.svg?v=bd3d23b8f4a04e47464e4b1572e60727062b59893d19c050f9a5418b73db2716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
