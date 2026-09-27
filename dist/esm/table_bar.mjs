export const name="table_bar";
export const id="dl_98c28ef9c005fd05b983";
export const url=new URL("../icons/table_bar.svg?v=fce6f11fdf1acead7129eef6e31977fa7c7a0dc635a286747905df17d4c111f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
