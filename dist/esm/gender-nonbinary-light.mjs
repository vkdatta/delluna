export const name="gender-nonbinary-light";
export const id="dl_5dea611bbbc7480c9b69";
export const url=new URL("../icons/gender-nonbinary-light.svg?v=54ab02babd992cad1b1c03f057770663b3634910b633dcba7e7d26438ddcca64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
