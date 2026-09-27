export const name="electric_scooter";
export const id="dl_dccef59a82d408187fe3";
export const url=new URL("../icons/electric_scooter.svg?v=982902fdb5f98adcabf13d498bac6422418abab683d555ab00172606f276fd66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
