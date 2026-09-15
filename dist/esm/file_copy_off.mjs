export const name="file_copy_off";
export const id="dl_9959d683d2bc4d35bc6a";
export const url=new URL("../icons/F/file_copy_off.svg?v=3372d28ce60ae9572607efbd9067de3c9107f967d29229da8153d2cdb2663d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
