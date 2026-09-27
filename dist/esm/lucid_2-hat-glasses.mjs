export const name="lucid_2-hat-glasses";
export const id="dl_cae074d8d760488dab0f";
export const url=new URL("../icons/lucid_2-hat-glasses.svg?v=d8d9857ddf9d2c35efd0beb6666a6334861ff0a771148fd623746cc02fe9759b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
