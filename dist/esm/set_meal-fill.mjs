export const name="set_meal-fill";
export const id="dl_0521fd54059175eaec25";
export const url=new URL("../icons/set_meal-fill.svg?v=4d72ca0f65e6af77a4d778ca76ee2a41839e59b67f5b725190fa20b93c24ebc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
