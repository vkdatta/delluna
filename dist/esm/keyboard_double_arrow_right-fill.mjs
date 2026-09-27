export const name="keyboard_double_arrow_right-fill";
export const id="dl_e495bf54d4bfcae9523f";
export const url=new URL("../icons/keyboard_double_arrow_right-fill.svg?v=8e360380f7f9a6f220fc31180cca61a9a50d53c5bd90d730c6cabb02d30e28f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
