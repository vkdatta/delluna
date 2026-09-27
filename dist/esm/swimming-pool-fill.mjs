export const name="swimming-pool-fill";
export const id="dl_fdc445e6e0ced9cc7bcf";
export const url=new URL("../icons/swimming-pool-fill.svg?v=3f35ba9dedb524bb81cb957e158db6c1f22eb4554cd0fbb411c147bf49dff43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
