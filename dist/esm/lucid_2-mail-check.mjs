export const name="lucid_2-mail-check";
export const id="dl_038743ab46e84dcdae38";
export const url=new URL("../icons/lucid_2-mail-check.svg?v=328a31f98f8d54ad7ac8412e901705deff7512e06e56cd5857b5c12c68e31691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
