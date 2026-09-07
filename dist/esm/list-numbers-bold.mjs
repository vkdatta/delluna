export const name="list-numbers-bold";
export const id="dl_70701c2f2b994adcafe7";
export const url=new URL("../icons/list-numbers-bold.svg?v=b85c90f81d3d2f81b54e4af1732847c4b860761c2e4aa4f174dbe9cfe4e24500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
