export const name="chair_counter-fill";
export const id="dl_f37593b728199eb25c0d";
export const url=new URL("../icons/chair_counter-fill.svg?v=6d9d85d56d0215606ead8b3920a96dca7f3cc625ae32319ee8013e2527e8ccbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
