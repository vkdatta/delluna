export const name="lucid_1-captions-off";
export const id="dl_6f361b360a2b4a17bc7b";
export const url=new URL("../icons/lucid_1-captions-off.svg?v=f7287cbfd729241ad25d230d7956728b972aec14534bedd4771b962c6a2a510c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
