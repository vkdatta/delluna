export const name="tab-fill";
export const id="dl_35232cfe38de4b878cad";
export const url=new URL("../icons/T/tab-fill.svg?v=6a674ff923b89ecc8bc5fc52920d4acf986b882ac0272aca88cdcfd67a97606f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
