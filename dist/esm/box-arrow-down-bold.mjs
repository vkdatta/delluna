export const name="box-arrow-down-bold";
export const id="dl_ea54e786f8d246489134";
export const url=new URL("../icons/box-arrow-down-bold.svg?v=9e212243bd73e9518fa3286328bc000799ee5f5fb9de227e3ec923b1d9bdd827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
