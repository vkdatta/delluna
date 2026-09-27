export const name="raven";
export const id="dl_d95fe7646b8a5ef7bbd6";
export const url=new URL("../icons/raven.svg?v=87cb708b5bb34dd92d93388840c64e9de0e619bc4da4fc44efface41af1d6184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
