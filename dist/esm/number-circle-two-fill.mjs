export const name="number-circle-two-fill";
export const id="dl_9ce49909428842f58661";
export const url=new URL("../icons/number-circle-two-fill.svg?v=ac641ab7033d064505a275047d26b124ce3a854f665ad82b08e6c3431e21ecb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
