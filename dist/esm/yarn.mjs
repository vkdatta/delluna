export const name="yarn";
export const id="dl_454b6f9cccf54a9eb9ca";
export const url=new URL("../icons/yarn.svg?v=bce544d6e727504221ab06209e15f1aefd4a56e4a41f8f120ddeded70f7bdacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
