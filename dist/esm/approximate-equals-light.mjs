export const name="approximate-equals-light";
export const id="dl_674f4b1942f74308b0c9";
export const url=new URL("../icons/approximate-equals-light.svg?v=496a9fb901730e9b8fcf351dcaee12226669bd77693e586c6ed2420c240a45dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
