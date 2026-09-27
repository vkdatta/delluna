export const name="unfold_less_double-fill";
export const id="dl_485b40c8dc28b8c4c6a3";
export const url=new URL("../icons/unfold_less_double-fill.svg?v=ef865befad3b8ebdc0629ff4ee0c07a900a69b9cdad3113e889646d917b314c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
