export const name="lucid_1-code-xml";
export const id="dl_7496080b2a4e44b19df0";
export const url=new URL("../icons/lucid_1-code-xml.svg?v=403f5a2511a0f43ab73c8fe8447a35aa69948c2ab872ed712325ea35df9ba1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
