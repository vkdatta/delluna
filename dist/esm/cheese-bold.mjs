export const name="cheese-bold";
export const id="dl_86330c3639a3461086a2";
export const url=new URL("../icons/cheese-bold.svg?v=b10d066ed27689a48df705cc32d9cd2a6c21b48feab69527922d56f63bd95326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
