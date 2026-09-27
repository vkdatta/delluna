export const name="clean_hands";
export const id="dl_57d77ee30a392db50bc7";
export const url=new URL("../icons/clean_hands.svg?v=1fb6cc2479019201d1a2641c10f0dbc8ef531d5a1c46ff4d20121dbd8594f3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
