export const name="line_axis-fill";
export const id="dl_f5a47bf0c40cd7aeaea1";
export const url=new URL("../icons/line_axis-fill.svg?v=f3986319e83be9a8a3e96668a4bc44846fb7af25b088d7b5b2c8e8c42473cbda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
