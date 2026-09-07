export const name="lucid_3-regex";
export const id="dl_e7732b6e7e184246a9d3";
export const url=new URL("../icons/lucid_3-regex.svg?v=597533afb2b8a0618f343de65ac7c763127399704dc691a9992257cee769ed64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
