export const name="dev-to-logo";
export const id="dl_f8892c076a0d421a9d7b";
export const url=new URL("../icons/dev-to-logo.svg?v=9b3d7e7559372d24e0d3e7c3439dbc1e7947c3c59fae912374ae5e311ac0c80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
