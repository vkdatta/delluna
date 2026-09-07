export const name="windows-logo-bold";
export const id="dl_17f5bd99e9314bfeab91";
export const url=new URL("../icons/W/windows-logo-bold.svg?v=cddff926d2eda79f74c062c7d96be3c62d266dc9843ef5c920f3d81b4bf29195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
