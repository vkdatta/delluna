export const name="not-subset-of-thin";
export const id="dl_de2bf1c7aee94f80bab1";
export const url=new URL("../icons/not-subset-of-thin.svg?v=fa71635ee4c5c544c85e63b78c82bfe9ba35d79f43881b5628843c3aa1453c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
