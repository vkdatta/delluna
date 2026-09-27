export const name="number-six-bold";
export const id="dl_42736af806fd4947ae98";
export const url=new URL("../icons/number-six-bold.svg?v=c055e99fee16c4f84a8cf54a05c9ff9af79d34a801dd38161736f839f76d71fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
