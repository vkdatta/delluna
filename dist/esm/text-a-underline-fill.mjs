export const name="text-a-underline-fill";
export const id="dl_cb41a1e90f3959968346";
export const url=new URL("../icons/text-a-underline-fill.svg?v=4b69d18763c0f7dc7612f2d9123bf08d8bb7acacccd0028b9384200847b3cd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
