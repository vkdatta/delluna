export const name="lighthouse-thin";
export const id="dl_b30a12d89f094fd69501";
export const url=new URL("../icons/lighthouse-thin.svg?v=47d1fcee78c6974a4f47f38be602844af4098b06720c5e904e012fc6a5921fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
