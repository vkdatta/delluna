export const name="number-square-three-light";
export const id="dl_d4f45e2e7fa84bfa8c96";
export const url=new URL("../icons/number-square-three-light.svg?v=c749c8cc58d15d87cbf63d9c21c4520b1a3f8abaada5ee7dbf49b4a364acfd0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
