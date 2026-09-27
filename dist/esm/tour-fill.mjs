export const name="tour-fill";
export const id="dl_4368553c79a8df82c54c";
export const url=new URL("../icons/tour-fill.svg?v=f4ca60aa10a23730b5aa4407f5f6074472ccda035ba0732e6e79232a48bd86d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
