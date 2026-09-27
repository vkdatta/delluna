export const name="screen_share-fill";
export const id="dl_f9f06f9c54152e946ebb";
export const url=new URL("../icons/screen_share-fill.svg?v=5a8643ab2ee890e8417dab2fa288335c9d2cb146d6b90bbb8b3ee6a90e5e8547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
