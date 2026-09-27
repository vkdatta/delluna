export const name="empty_dashboard-fill";
export const id="dl_ca188e3e0af1e0fd80c1";
export const url=new URL("../icons/empty_dashboard-fill.svg?v=caca7d4a1169d6033bb0c330063e2a88ec6ae59a07cac95281b8e8e7ed1740cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
