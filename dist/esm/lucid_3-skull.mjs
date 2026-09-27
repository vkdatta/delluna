export const name="lucid_3-skull";
export const id="dl_c7618281f61546298043";
export const url=new URL("../icons/lucid_3-skull.svg?v=128021c05c6adcdff7e59dd51a1236916efb5b4f93f8db9dbcfb62d098541a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
