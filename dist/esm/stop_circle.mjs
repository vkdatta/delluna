export const name="stop_circle";
export const id="dl_eac9d4b7eb874108eb78";
export const url=new URL("../icons/stop_circle.svg?v=438904ca89521b660b45931286c0462dc22564fbf0a8d28d630fb36c11da7e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
