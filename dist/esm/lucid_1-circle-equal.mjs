export const name="lucid_1-circle-equal";
export const id="dl_0feed34b13f54ca39a98";
export const url=new URL("../icons/lucid_1-circle-equal.svg?v=02a6dc0f00c75a79ab88c73605c4f7e2225b2d3688525eec8b8e5839bc218065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
