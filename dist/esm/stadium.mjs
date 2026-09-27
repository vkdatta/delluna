export const name="stadium";
export const id="dl_3c76dfcb2aaceaa2001d";
export const url=new URL("../icons/stadium.svg?v=9ac9895f8beb9ced7878e5a1314e016ae6f10f5efab4bd1be9b77d99395190d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
