export const name="vacuum_2-fill";
export const id="dl_83f44a9ce16adca6e2ee";
export const url=new URL("../icons/vacuum_2-fill.svg?v=41d2b140d36f186b527c047eff85fcb7681309fed600b948c63c161ec195e827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
