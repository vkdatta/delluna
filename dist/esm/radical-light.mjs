export const name="radical-light";
export const id="dl_8d6cee84f6494c9ebe51";
export const url=new URL("../icons/radical-light.svg?v=16254fdca973127dd36eff18cb49e7cecb2d9b17ab6486ecdbaf8bbe8df168e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
