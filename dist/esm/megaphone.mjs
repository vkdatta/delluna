export const name="megaphone";
export const id="dl_baab3850cabc413b9fa2";
export const url=new URL("../icons/megaphone.svg?v=6bb3638fd7d8988bc449638293566ac2d978307357675d46c37f6a04a814006e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
