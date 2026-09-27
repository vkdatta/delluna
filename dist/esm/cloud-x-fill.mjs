export const name="cloud-x-fill";
export const id="dl_c5a80c6f77a14947896c";
export const url=new URL("../icons/cloud-x-fill.svg?v=95959c6b50a5aba0700d1a4a09fcdbcfc0cbdf073cb36488fde09ac2b0714ca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
