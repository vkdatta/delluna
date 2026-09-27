export const name="temple_buddhist";
export const id="dl_7f1d11a8c0065b7e8137";
export const url=new URL("../icons/temple_buddhist.svg?v=c04ca19f8ca16ed559526bf7ccb1be9c0272031128839276d00dfb749474737c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
