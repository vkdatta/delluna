export const name="android_cell_5_bar_alert";
export const id="dl_7a71dca6cab949dea4c1";
export const url=new URL("../icons/android_cell_5_bar_alert.svg?v=f374632993cc4b9660dd22d0cc51ae3e03ae139e16b716a60616020bb3f6f262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
