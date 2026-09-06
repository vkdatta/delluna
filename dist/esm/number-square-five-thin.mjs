export const name="number-square-five-thin";
export const id="dl_b06ef5b97abb42d48c32";
export const url=new URL("../icons/number-square-five-thin.svg?v=64ebf2e9e8ce0dec452ad46eaa8fce016b74c3183bacd79c453ea769dd8c4cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
