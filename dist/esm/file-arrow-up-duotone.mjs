export const name="file-arrow-up-duotone";
export const id="dl_8d11350c09304f549237";
export const url=new URL("../icons/file-arrow-up-duotone.svg?v=f8915874debbb5903b68ae2e2962e9c4693dd79e7ee2b22b8b578d020b256284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
