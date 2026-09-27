export const name="schedule_send-fill";
export const id="dl_5838929c502ee1a44e27";
export const url=new URL("../icons/schedule_send-fill.svg?v=e99c3b3781a4dfbd3ea7aad08b24119c5a7f2a9ea8c5118bc2781f60f092425c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
