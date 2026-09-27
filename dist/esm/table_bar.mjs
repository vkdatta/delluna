export const name="table_bar";
export const id="dl_2d659eb01a1d6fd32752";
export const url=new URL("../icons/table_bar.svg?v=f1b72f375421650ae5cade782821116c5a228c2638766ec097415393041de0a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
