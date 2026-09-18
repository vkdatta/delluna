export const name="broadcast_on_home-fill";
export const id="dl_fb335995a43b4172ad84";
export const url=new URL("../icons/broadcast_on_home-fill.svg?v=e42d4de40afa0a30573877b699a36c049123a72470e94c0d58f7d423b95df7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
