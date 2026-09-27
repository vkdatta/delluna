export const name="android_cell_5_bar_alert";
export const id="dl_41aeabd2f28f328a55c8";
export const url=new URL("../icons/android_cell_5_bar_alert.svg?v=2d4bf4caa4a30685d1b57e4d5f1300cea2e447829367c30d352acde815b1aac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
