export const name="earbuds_2-fill";
export const id="dl_5e3ef62bc091469734fa";
export const url=new URL("../icons/earbuds_2-fill.svg?v=77a35a145e09a8d783aa60f07fe048d9adafd98604a0926c4e3ec3527b577ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
