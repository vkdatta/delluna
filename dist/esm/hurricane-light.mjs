export const name="hurricane-light";
export const id="dl_00609887ed364a73bcf9";
export const url=new URL("../icons/hurricane-light.svg?v=f73d1773fb4c0713a58ef438dae781fab3b20ddc998413cac45451f2657b835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
