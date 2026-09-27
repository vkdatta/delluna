export const name="empty_dashboard";
export const id="dl_c971c979f18ada3c1df8";
export const url=new URL("../icons/empty_dashboard.svg?v=5ef1b8634a45f28466b508108df0a33942cbeb6dc7a1436042c96a199e12f90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
