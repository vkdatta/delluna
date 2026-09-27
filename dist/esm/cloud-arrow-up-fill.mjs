export const name="cloud-arrow-up-fill";
export const id="dl_25d44fa7c9dd4a79bb0f";
export const url=new URL("../icons/cloud-arrow-up-fill.svg?v=31837e15ebc1a03d1dcbc57578d3dadc58b493dcc2dee37208bfb83f176e2373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
