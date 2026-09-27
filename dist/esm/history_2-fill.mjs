export const name="history_2-fill";
export const id="dl_66686e1b426400c73542";
export const url=new URL("../icons/history_2-fill.svg?v=c73893eaf26a21127ececa5273267819db29a731d994b7326ae45414e1967e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
