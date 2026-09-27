export const name="lucid_1-code-xml";
export const id="dl_7496080b2a4e44b19df0";
export const url=new URL("../icons/lucid_1-code-xml.svg?v=6324c84bcb672d973647aa56a4f6901c434eb4c9bdc555b8e4479b5cc9aa6e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
