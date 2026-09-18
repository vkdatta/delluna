export const name="video_chat-fill";
export const id="dl_4f1fbfa200824f4aa843";
export const url=new URL("../icons/V/video_chat-fill.svg?v=611e2671cde9c6dbc1ea1955bca1a014ef938763b1f717610d3e6e3529691c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
