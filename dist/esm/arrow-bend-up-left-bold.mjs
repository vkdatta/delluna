export const name="arrow-bend-up-left-bold";
export const id="dl_bc2ff91f9e514d45ac44";
export const url=new URL("../icons/arrow-bend-up-left-bold.svg?v=b59c6a1dea610f669a69920bece2138108a54d88eaa9a1d0a20f82e1657c9f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
