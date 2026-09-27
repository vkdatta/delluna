export const name="lucid_1-astroid";
export const id="dl_dff38394a48444c6ac15";
export const url=new URL("../icons/lucid_1-astroid.svg?v=d8d67d07a245150e3985feedd47e482bf57656c02b4ccc5431d7b4203b9f2405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
