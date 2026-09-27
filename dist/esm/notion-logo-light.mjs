export const name="notion-logo-light";
export const id="dl_9b188cbf5375400fa2b1";
export const url=new URL("../icons/notion-logo-light.svg?v=3c6fedda82af8181507b0e36fe1be1fcb595834061c1dd2263d09af45ad40462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
