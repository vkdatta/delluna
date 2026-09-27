export const name="wrench-bold";
export const id="dl_a71825a4071f52d31591";
export const url=new URL("../icons/wrench-bold.svg?v=dc14340365afc4d20bbd8c43033fef670f35e608f7c4c877ba8f9dfd531af3a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
