export const name="integration_instructions";
export const id="dl_b3020b591c708874b58c";
export const url=new URL("../icons/integration_instructions.svg?v=c96217ec216227ff0002900c2ec8c32ecd9115d995942a553a84e1fdc84d2bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
