export const name="file-cloud-thin";
export const id="dl_103b7478b4c34632b247";
export const url=new URL("../icons/file-cloud-thin.svg?v=1eb368987f78abc97dc4475d2c05bb850ab99a00496bc42dc769327b99d0cbd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
