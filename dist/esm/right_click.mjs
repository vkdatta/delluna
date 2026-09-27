export const name="right_click";
export const id="dl_2895f913eb248406707a";
export const url=new URL("../icons/right_click.svg?v=8f1e35ab801bab724b14d8cca9dc198fb111dd5167799ad1f8e60850f50b8d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
