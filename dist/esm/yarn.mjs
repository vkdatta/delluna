export const name="yarn";
export const id="dl_333f099fc11c45a4b756";
export const url=new URL("../icons/Y/yarn.svg?v=bce544d6e727504221ab06209e15f1aefd4a56e4a41f8f120ddeded70f7bdacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
