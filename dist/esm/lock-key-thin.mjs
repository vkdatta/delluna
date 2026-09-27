export const name="lock-key-thin";
export const id="dl_d4181734a35642419a55";
export const url=new URL("../icons/lock-key-thin.svg?v=c9cca23fa9d00f24cca936de1d68d8eaf5e4a26e704cab4c843e71036fa44375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
