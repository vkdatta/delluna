export const name="developer_guide";
export const id="dl_52e2d086f352454ae2f6";
export const url=new URL("../icons/developer_guide.svg?v=e76557eac27689ef78470ed8e0ded63dc749073a3b9f13c2ae4801254900fc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
