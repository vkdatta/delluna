export const name="chair_umbrella";
export const id="dl_dae7be93d9df945de63b";
export const url=new URL("../icons/chair_umbrella.svg?v=919bf072d47494f0e7b4a60dbcc6ed2857f284193335e3ff29510bd4082cc0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
