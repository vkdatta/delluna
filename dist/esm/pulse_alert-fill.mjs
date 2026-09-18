export const name="pulse_alert-fill";
export const id="dl_c092c148507941eda4a5";
export const url=new URL("../icons/pulse_alert-fill.svg?v=b9db9ba5f9c0548ec787b8a3fbfc85dcef8ff634e14e5a1232b330d80abc6f14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
