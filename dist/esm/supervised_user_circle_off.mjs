export const name="supervised_user_circle_off";
export const id="dl_a7cbcb243596515ca808";
export const url=new URL("../icons/supervised_user_circle_off.svg?v=25945693fa3e02daccbdb138cf08671df23961d51b3075e0e76baf225560435a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
