export const name="map-pin-line-duotone";
export const id="dl_719763a126e948e1a36d";
export const url=new URL("../icons/map-pin-line-duotone.svg?v=def7cf8a72b05f77afb099a701d47b20ce9932100a366751726a59a6bf6b656e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
