export const name="nearby_error-fill";
export const id="dl_12c06d71fc3060093000";
export const url=new URL("../icons/nearby_error-fill.svg?v=4eee01ced5e654be2a95e937cf90430b326190988329bc0bfea32de1c6eb792e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
