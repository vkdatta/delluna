export const name="jamboard_kiosk";
export const id="dl_5ca989a877d3635882f0";
export const url=new URL("../icons/jamboard_kiosk.svg?v=63ddb9bbdd840470fe5b102a673dba0703e5de38d07020c2b663964a64b05f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
