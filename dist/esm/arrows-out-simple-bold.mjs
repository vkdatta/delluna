export const name="arrows-out-simple-bold";
export const id="dl_8323701a56af415497a6";
export const url=new URL("../icons/arrows-out-simple-bold.svg?v=ae4f119af3e34d6925b0bb49b69699f09599cd5267eaaafe1948495611cb7473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
