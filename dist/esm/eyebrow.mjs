export const name="eyebrow";
export const id="dl_a832ea3955a484554518";
export const url=new URL("../icons/eyebrow.svg?v=1c09ec83922b9db4d3dba4d2aab9637d12b5b50350ca8a93d26c96b41e16cf7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
