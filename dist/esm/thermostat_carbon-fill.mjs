export const name="thermostat_carbon-fill";
export const id="dl_6bec25fbaa452c0ad6ac";
export const url=new URL("../icons/thermostat_carbon-fill.svg?v=68029443453878d1ae9c12ac3dd100673534d9767b77bd048d64c1a0a15a20fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
