export const name="send_money-fill";
export const id="dl_296e00102318ecda2a27";
export const url=new URL("../icons/send_money-fill.svg?v=92dfb927669f54fd7ac1e5bc277d66eb6e1b5f13b5adf469082e76e30e871c81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
