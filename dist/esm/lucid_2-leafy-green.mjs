export const name="lucid_2-leafy-green";
export const id="dl_1c938c8da3104940ad4b";
export const url=new URL("../icons/lucid_2-leafy-green.svg?v=4fa99f0605cb628c7bb5dced0a09e84205b251276a63571224629afeb7d0a040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
