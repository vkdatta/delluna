export const name="mosque-fill";
export const id="dl_ba47ecd1d7d344879da6";
export const url=new URL("../icons/mosque-fill.svg?v=98ed2ced0ecdb3cde9a4264e9c6211436917c82749029de6dd9080ab553e1850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
