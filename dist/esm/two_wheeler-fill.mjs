export const name="two_wheeler-fill";
export const id="dl_0c575d12e8e5b6e060dd";
export const url=new URL("../icons/two_wheeler-fill.svg?v=bde33ed5747dcfdf087a7299ddc292c7e459a8f835065ecfae193e1f00872459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
