export const name="signature-thin";
export const id="dl_746e987fd4e75d394a7e";
export const url=new URL("../icons/signature-thin.svg?v=ca34aa49c3e37cf7cf86faed3b8005c8b603e734a2b3b82b42330bc6cfee0203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
