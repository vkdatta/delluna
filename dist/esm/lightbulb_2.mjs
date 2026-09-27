export const name="lightbulb_2";
export const id="dl_5650a3938efd62696f2d";
export const url=new URL("../icons/lightbulb_2.svg?v=849ab5e103a09aa91186fc9d6067c091ee77eb38e4aeb49601f90986b24bf184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
