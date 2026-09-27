export const name="cloud-slash-light";
export const id="dl_7361c558a9504d2b9adf";
export const url=new URL("../icons/cloud-slash-light.svg?v=1230cb1e3d108f6795691802b8feec0c15cf0ad16e0b64d9436b610ace8f2380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
