export const name="personal_places-fill";
export const id="dl_40e032405ffb40a49aa8";
export const url=new URL("../icons/P/personal_places-fill.svg?v=29a37eb13c14800dd7cf085986b81eb7dfad34dc1a58aa305d2e24b9f6d1c060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
