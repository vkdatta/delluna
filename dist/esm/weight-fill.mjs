export const name="weight-fill";
export const id="dl_269c1d42af293e752306";
export const url=new URL("../icons/weight-fill.svg?v=b8c4c96a5c219e2e02103fbf04b0cd9052294cb21b82b0b5283178141ba7fbc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
