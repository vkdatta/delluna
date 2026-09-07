export const name="shield-star-thin";
export const id="dl_302fe93e9d4d444cac4a";
export const url=new URL("../icons/S/shield-star-thin.svg?v=6223c831d2228a4488f4cb31f53c1d94e73ecf05f072ce2708e4e031ec508407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
