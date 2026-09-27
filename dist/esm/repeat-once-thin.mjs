export const name="repeat-once-thin";
export const id="dl_ad9c1dbfae8b4c0f9433";
export const url=new URL("../icons/repeat-once-thin.svg?v=8c1372a9eada5c402226a7787a17982d4df71fda5cc7f348330f36bddb3d72dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
