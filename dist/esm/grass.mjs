export const name="grass";
export const id="dl_91dd90b3e8814ade5d6d";
export const url=new URL("../icons/grass.svg?v=9298bd73adca8a4ced81be7100149807ac8a2dc7b09db2ef0e3ccdcea63c5b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
