export const name="align-center-horizontal-simple";
export const id="dl_99e88bb58de24b2ab2ec";
export const url=new URL("../icons/align-center-horizontal-simple.svg?v=22df5e523416d00e381110fb612022a60eb972a593760fbfa268fc41f104f9f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
