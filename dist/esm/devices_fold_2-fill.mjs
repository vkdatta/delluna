export const name="devices_fold_2-fill";
export const id="dl_434af2feb64434ea9038";
export const url=new URL("../icons/devices_fold_2-fill.svg?v=dbe8780916d88b5ea6433955aa64d9833b6344112fb5cf94d108096882350a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
