export const name="bookmark_flag-fill";
export const id="dl_19db4ad74ef30e4c6439";
export const url=new URL("../icons/bookmark_flag-fill.svg?v=4a3a7ced8701b1db2029ca74c369821bd5429ed891ad5ade8d584c380ba0ea35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
