export const name="stop_screen_share";
export const id="dl_5326938189c7f5c2dc5d";
export const url=new URL("../icons/stop_screen_share.svg?v=4242f3d7846a5d47d8e1c4b84ae68c7ee4453c17f31a7ddbfbd37fd0c8578f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
