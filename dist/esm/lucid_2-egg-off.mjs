export const name="lucid_2-egg-off";
export const id="dl_44423ba8db1e44c388ba";
export const url=new URL("../icons/lucid_2-egg-off.svg?v=915c7a6eb83029a93dbcc660fcf81e311ef2e3cb51c488abe664d54772670a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
