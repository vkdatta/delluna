export const name="lucid_1-ampersand";
export const id="dl_b34bb932bf5e428f99b9";
export const url=new URL("../icons/lucid_1-ampersand.svg?v=dcd6baed221f150561b5575838a4d0ba731a1bc7e0a3bac85c912d1c2fb711dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
