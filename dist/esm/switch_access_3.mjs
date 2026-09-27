export const name="switch_access_3";
export const id="dl_35a1f0bba7280784322b";
export const url=new URL("../icons/switch_access_3.svg?v=8dc10f8dd016331bacf5dc08fc553b7136aa0e47b3a96831c49e11574e2068a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
