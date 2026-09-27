export const name="wall-light";
export const id="dl_6531ac5377106c14b647";
export const url=new URL("../icons/wall-light.svg?v=97abac1189bb61fb36cba9ef3a7304c491a823e246f7951b21fdaadb0d041d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
