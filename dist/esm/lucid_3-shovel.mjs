export const name="lucid_3-shovel";
export const id="dl_32d08c26fab64389b350";
export const url=new URL("../icons/lucid_3-shovel.svg?v=5b984e8ebfb81abc525f38afbd20305f7293939201b2e6d570da7e4397dacc7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
