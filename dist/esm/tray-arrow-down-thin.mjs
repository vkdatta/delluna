export const name="tray-arrow-down-thin";
export const id="dl_33c7a9c44ebcafc3bab4";
export const url=new URL("../icons/tray-arrow-down-thin.svg?v=2796dd99ab2a8b9403215d18c47c197cfd35459b56c668c36de1e14b33fd96cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
