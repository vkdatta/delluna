export const name="arrow-bend-left-down-fill";
export const id="dl_73e74e7696f54315a6e9";
export const url=new URL("../icons/arrow-bend-left-down-fill.svg?v=63efea4ca36ee9541285ea61f9b56f1b45f6f8513347541b4b91bafd10a7ed6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
