export const name="hard-drives-fill";
export const id="dl_79dca56a59484dd3afa0";
export const url=new URL("../icons/hard-drives-fill.svg?v=769859d5dc10db64b5b126d8b9f3851e44c1cacd43ca9138a06efb3657e34276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
