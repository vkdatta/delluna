export const name="modeling-fill";
export const id="dl_d90810a7871f4bca9bec";
export const url=new URL("../icons/M/modeling-fill.svg?v=45f9f86c414136fdff3e7525f9bbec564d4c9db2e0731efb0ea6adc2bca4cf61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
