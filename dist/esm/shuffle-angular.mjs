export const name="shuffle-angular";
export const id="dl_ceaafb48d9c3b6334aa3";
export const url=new URL("../icons/shuffle-angular.svg?v=86980addae7b583502364e4fb99232ac7e8a53930bbea900b8ec6fb46a4d2d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
