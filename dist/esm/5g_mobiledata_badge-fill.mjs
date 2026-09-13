export const name="5g_mobiledata_badge-fill";
export const id="dl_c887559afc96449f87b9";
export const url=new URL("../icons/5/5g_mobiledata_badge-fill.svg?v=bf91d7934d85f40accfd5033d31801a76c8559f5155b39c974ef9577c485e148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
