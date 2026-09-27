export const name="lucid_1-captions-off";
export const id="dl_6f361b360a2b4a17bc7b";
export const url=new URL("../icons/lucid_1-captions-off.svg?v=28477f434b048c6ca22834bd3a92df9490bd5a7214b77cfa291456f9c369fd56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
