export const name="arrow-bend-right-up-bold";
export const id="dl_89b89b190c374296aa2f";
export const url=new URL("../icons/arrow-bend-right-up-bold.svg?v=129a8e8d9569e18192abc16f6d01ab93876c325622c11c98346f3fb3e29b0310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
