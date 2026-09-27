export const name="buttons_alt";
export const id="dl_e9bed47235c6795c3919";
export const url=new URL("../icons/buttons_alt.svg?v=7269b43bbe5cabf61f9c6d3222e2b685036f72bf1db0e0a3f292c0e625f49376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
