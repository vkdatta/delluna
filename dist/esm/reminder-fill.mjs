export const name="reminder-fill";
export const id="dl_62691a00a089d17f2db0";
export const url=new URL("../icons/reminder-fill.svg?v=e5a3471eb1d5537e42c8eb0a91d5cc2bfedfb9f18c61b91fd731f3d63c21edae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
