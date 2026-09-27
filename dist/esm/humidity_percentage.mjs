export const name="humidity_percentage";
export const id="dl_4caf3b1f786cb8f39cc3";
export const url=new URL("../icons/humidity_percentage.svg?v=7aee4068348c6f3e84cd81fee65f1980237c8e22938619ee57683a0fcc6ccd8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
