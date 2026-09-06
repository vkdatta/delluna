export const name="file-c-sharp-duotone";
export const id="dl_d1dd5a7094ce4ddfa56d";
export const url=new URL("../icons/file-c-sharp-duotone.svg?v=51c7513aa91d0c80c510ebef8d9f1938964d89a334a8203f96e535fe00ce2e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
