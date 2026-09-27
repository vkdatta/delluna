export const name="south-fill";
export const id="dl_ac953be48b8535b62c46";
export const url=new URL("../icons/south-fill.svg?v=9b9c57023448ba28924ee3d0fbc5298b9ed8413030e2b8dc8ba4a3f149baa955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
