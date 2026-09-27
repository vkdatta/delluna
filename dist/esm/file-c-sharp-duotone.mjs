export const name="file-c-sharp-duotone";
export const id="dl_d1dd5a7094ce4ddfa56d";
export const url=new URL("../icons/file-c-sharp-duotone.svg?v=0348751e1e4a2c149e26c7e1bd9040bcf397ca63472e4a37c7f64848c698b229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
