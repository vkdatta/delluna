export const name="desktop_cloud-fill";
export const id="dl_f09a777175d92fb27c8a";
export const url=new URL("../icons/desktop_cloud-fill.svg?v=11bf1afc17e912df1b47788d24bb51ef1345d1bc34d69088729fdb3a86feccd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
