export const name="grain-fill";
export const id="dl_39388421c58a3d198c42";
export const url=new URL("../icons/grain-fill.svg?v=e60179bd905761bacd66d5d007ea59ed18e2d0696cdcefdba44e8ecc2e4e92ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
