export const name="number-nine-thin";
export const id="dl_33fd5542c0104dd492d2";
export const url=new URL("../icons/number-nine-thin.svg?v=9579c972698fdf7cc86927f22d86f903c5471adaca45cb8833d981afae5850a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
