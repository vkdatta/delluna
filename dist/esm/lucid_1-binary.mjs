export const name="lucid_1-binary";
export const id="dl_e34c7f49593046309c89";
export const url=new URL("../icons/lucid_1-binary.svg?v=1d436d8f93c3edc5d6ad7118450be0a21dade8300343c3157de71fdbd8445f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
