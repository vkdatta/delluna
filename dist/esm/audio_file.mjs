export const name="audio_file";
export const id="dl_99b9477a3b3376dffca9";
export const url=new URL("../icons/audio_file.svg?v=065066c6a484cf02f86e23e4da20f968244bbb8ea51585b74f7bf9710f7f8c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
