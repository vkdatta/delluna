export const name="swipe_right_alt-fill";
export const id="dl_467735541991312bf1ed";
export const url=new URL("../icons/swipe_right_alt-fill.svg?v=2933a2dde339c729b08b39c17d7410b74d503560c08280020a9b5458ad09ab9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
