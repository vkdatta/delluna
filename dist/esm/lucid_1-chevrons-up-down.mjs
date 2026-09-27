export const name="lucid_1-chevrons-up-down";
export const id="dl_6bb6cc67ca7343028dc6";
export const url=new URL("../icons/lucid_1-chevrons-up-down.svg?v=ac7cd914a514a535e7a4fe6617934fa69e3119e2472f8a16c8034faa1d6d9f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
