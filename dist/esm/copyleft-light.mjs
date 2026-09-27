export const name="copyleft-light";
export const id="dl_e0de3ae9d877448b8979";
export const url=new URL("../icons/copyleft-light.svg?v=3c0b5bff5526042396cfce654a7a77578a4f674f22c8f8ede8d8d1e4d67b7ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
