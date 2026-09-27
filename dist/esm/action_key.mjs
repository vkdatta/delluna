export const name="action_key";
export const id="dl_8886a48854e00dbf5c51";
export const url=new URL("../icons/action_key.svg?v=2229ebaa1653be7d0bbebc2e45ab11406b980f73ba73159703f8e25defd96711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
