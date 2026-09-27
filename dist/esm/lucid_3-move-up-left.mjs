export const name="lucid_3-move-up-left";
export const id="dl_ca064221a53d4cd992cb";
export const url=new URL("../icons/lucid_3-move-up-left.svg?v=1332bca31a55547e59818d8054ffd2fa16a8246fa076edea2149a1e5924c8e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
