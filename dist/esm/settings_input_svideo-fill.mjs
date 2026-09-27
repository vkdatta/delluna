export const name="settings_input_svideo-fill";
export const id="dl_0cbb5b5d1484dffbeae3";
export const url=new URL("../icons/settings_input_svideo-fill.svg?v=b9bc2c527d79118d174efd169cbebf6f2a7121c6682b8563722dbf6176c04f64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
