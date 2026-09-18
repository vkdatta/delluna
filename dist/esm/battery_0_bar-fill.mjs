export const name="battery_0_bar-fill";
export const id="dl_69152f9d2cc344adbe9f";
export const url=new URL("../icons/battery_0_bar-fill.svg?v=d54b9812e875e5310e5dca4fb825fe164d4d9925530332a0d09f09f50e9d43e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
