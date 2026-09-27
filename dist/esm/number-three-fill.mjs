export const name="number-three-fill";
export const id="dl_2c3b5e8a63ca413db39e";
export const url=new URL("../icons/number-three-fill.svg?v=38cdfb792e420b6db8a1abfcbea0938e243518942aaaae0eef3fc4aabe05aeab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
