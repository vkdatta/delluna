export const name="unite";
export const id="dl_60ce14408a4eccd1e84d";
export const url=new URL("../icons/unite.svg?v=c57a813c25e320f1f3ac71dbedf56c3b24d687cfe2a157e9db995ee36b8a44d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
