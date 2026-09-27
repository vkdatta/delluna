export const name="temp_preferences_eco-fill";
export const id="dl_722c982b70aa4d3475c8";
export const url=new URL("../icons/temp_preferences_eco-fill.svg?v=45a86efd0aaf74c265dad13bb2c3be87aaf6572bc93d211000a9b8d188a30382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
