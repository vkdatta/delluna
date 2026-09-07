export const name="unfold_less";
export const id="dl_f84e80b817d341bc920d";
export const url=new URL("../icons/all_60_named_svgs/unfold_less.svg?v=5c48bedbfc673cd01683efb79112f55b0b345c65b1e6fd792b18338c27614235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
