export const name="straighten";
export const id="dl_570bb1e1d91c455ca0f4";
export const url=new URL("../icons/straighten.svg?v=75c18670b7cb0189919f313045bab323be7d2add36a18a97a064f5c9a546b41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
