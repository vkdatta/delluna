export const name="dice-five-bold";
export const id="dl_8d8d1896184d4d1aaf6f";
export const url=new URL("../icons/dice-five-bold.svg?v=9044e6c497905f3d2f02a81c0ee6c1ac7063ce7e9f91b28b03298a4bb17c3769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
