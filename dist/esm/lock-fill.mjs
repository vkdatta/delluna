export const name="lock-fill";
export const id="dl_fa169ca3046b4cdc9a05";
export const url=new URL("../icons/lock-fill.svg?v=7c3bb342922c2eb313d14a196d50dd897f7048e336da9382c418242e59c4cf79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
