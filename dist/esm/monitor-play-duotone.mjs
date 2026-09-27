export const name="monitor-play-duotone";
export const id="dl_051459892c3642fd9f34";
export const url=new URL("../icons/monitor-play-duotone.svg?v=67aa7561f37cb61fb254cb25212d7a5775a8a88dbc17cc856252c5c960a96fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
