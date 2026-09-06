export const name="file-doc-bold";
export const id="dl_3468956b264e49a9980f";
export const url=new URL("../icons/file-doc-bold.svg?v=6433b3794db8cd4e9d4f19dd7e9c10e78b4f0fbba60505846accc9624acc47a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
