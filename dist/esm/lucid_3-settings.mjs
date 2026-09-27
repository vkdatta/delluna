export const name="lucid_3-settings";
export const id="dl_a413bcedb4d94f1faae7";
export const url=new URL("../icons/lucid_3-settings.svg?v=919c6824b885aad8c9bf5f3db0e3222e3f3a983d2ba23c131f860bf996a678bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
