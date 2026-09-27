export const name="matrix-logo";
export const id="dl_10ef967d313a4eea9219";
export const url=new URL("../icons/matrix-logo.svg?v=878fcc3eccddcfa1c766c66101862b7dc782b53fe80715dd10814a06f61b17db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
