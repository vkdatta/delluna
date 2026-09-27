export const name="member-of-fill";
export const id="dl_045b179d8c5247a1b041";
export const url=new URL("../icons/member-of-fill.svg?v=1a05b9c63c0c703649640109c24009e522ba83f0f078614db075b0efffa3ed05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
