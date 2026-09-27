export const name="cake-bold";
export const id="dl_ee02977204cf4ecbba6f";
export const url=new URL("../icons/cake-bold.svg?v=b75e900ee602e3b4e85fa9636b6654a4acf1282e160d86cf395713702433225c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
