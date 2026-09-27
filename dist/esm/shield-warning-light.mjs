export const name="shield-warning-light";
export const id="dl_fe606a6c3112bf03d6e3";
export const url=new URL("../icons/shield-warning-light.svg?v=64736d32d3ece877d1d9c98fbdf77b5d8885cf337690356c1791fc45cd0e2d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
