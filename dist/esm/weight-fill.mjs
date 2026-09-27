export const name="weight-fill";
export const id="dl_92901638887ff4b695de";
export const url=new URL("../icons/weight-fill.svg?v=f145355ff73d068a3069c081b54578dd9f2a9a52639b2d258f9c8915f974e3b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
