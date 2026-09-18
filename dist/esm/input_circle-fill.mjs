export const name="input_circle-fill";
export const id="dl_5a636db1b3644732b366";
export const url=new URL("../icons/I/input_circle-fill.svg?v=11b6aae5f52b7320a1fe049cd0c8f4542c3413eefa9d9364adfc23e52114c002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
