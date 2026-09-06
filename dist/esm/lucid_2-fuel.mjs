export const name="lucid_2-fuel";
export const id="dl_b8e397ad74864fffa880";
export const url=new URL("../icons/lucid_2-fuel.svg?v=409326a672a1f681d08599f0584d203e90b24b400fdef8610207aeac4687ee36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
