export const name="lucid_3-mouse-left";
export const id="dl_37e996dacc6c474295b4";
export const url=new URL("../icons/lucid_3-mouse-left.svg?v=05190f6ae68beeb5ae04f3193cdf6de6896af9da00b85a55da2e0bf761cf0570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
