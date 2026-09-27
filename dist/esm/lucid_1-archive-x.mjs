export const name="lucid_1-archive-x";
export const id="dl_21b8d986d61244e99998";
export const url=new URL("../icons/lucid_1-archive-x.svg?v=44489a863e64166a6d61adb60447afa56d074dbae3c4cccd526c693461cc744f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
