export const name="moon-bold";
export const id="dl_e877e9b4f4a14d45a102";
export const url=new URL("../icons/moon-bold.svg?v=ecac349ea9e9ad27cad66daf47bee2f94cec9d2e85339ccb379855be2aa39ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
