export const name="sync_desktop";
export const id="dl_552d3400babb0bb8afa8";
export const url=new URL("../icons/sync_desktop.svg?v=83ebe121eecbc86c49bc39f146842c129e1093fe8b6661d6e6892363a6f751ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
