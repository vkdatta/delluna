export const name="notches";
export const id="dl_07d445fe52a348aeb630";
export const url=new URL("../icons/notches.svg?v=0d9ce2478e3b7759587c69ea23f68e6f6df78d2ef1d2c3e41fa8c688dbef881f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
