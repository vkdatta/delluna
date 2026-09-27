export const name="download_for_offline";
export const id="dl_4ee0caa18c32dd7fcbe4";
export const url=new URL("../icons/download_for_offline.svg?v=0eee59aaa6ff6a975e6920914b40eff411fa0557c7da16d5fafbca0796fbceea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
