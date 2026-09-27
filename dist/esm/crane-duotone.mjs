export const name="crane-duotone";
export const id="dl_8c0eb6b4bf03494e8be1";
export const url=new URL("../icons/crane-duotone.svg?v=6662d979dde147b167d8cc9bc00f66b79d000957eec69f2bc76dd3db55e57a7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
