export const name="wb_twilight_2-fill";
export const id="dl_02de948a855ad9c52336";
export const url=new URL("../icons/wb_twilight_2-fill.svg?v=d76f02b33fce64e87f5f4bd53488e7b658c8e644ac59a2e0345b800ca2d66b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
