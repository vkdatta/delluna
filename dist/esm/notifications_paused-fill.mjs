export const name="notifications_paused-fill";
export const id="dl_45eea043fe9f2b69a23e";
export const url=new URL("../icons/notifications_paused-fill.svg?v=d99ecf88d050b1093964f9c9170011824cc85462943310b5afa39e6c58505c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
