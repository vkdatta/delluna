export const name="pause_circle-fill";
export const id="dl_2c35f2e1b86e4489b153";
export const url=new URL("../icons/P/pause_circle-fill.svg?v=481a11943d0d76c5b60333d455f9fc8935079c0f79d45092a87cf994326e3807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
