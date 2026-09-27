export const name="visibility_lock-fill";
export const id="dl_d78662331037fe7cda18";
export const url=new URL("../icons/visibility_lock-fill.svg?v=b94b5e6133027030155ed9a656562ba55a88247fd1e6d4da7b1cc9567826af31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
