export const name="browser_updated";
export const id="dl_c30b988611584e0dafe0";
export const url=new URL("../icons/browser_updated.svg?v=7e689f5812fd40e1080ea3117957ace77faef45c629b2ff367f45cd014bf633d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
