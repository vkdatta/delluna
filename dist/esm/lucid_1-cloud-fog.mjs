export const name="lucid_1-cloud-fog";
export const id="dl_dcad400f654149b5bb8d";
export const url=new URL("../icons/lucid_1-cloud-fog.svg?v=ab65d6899283850cf52ede6ea22061b8606dc1494f6dfa0a9a298df1aa00c785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
