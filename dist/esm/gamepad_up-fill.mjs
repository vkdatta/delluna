export const name="gamepad_up-fill";
export const id="dl_4f34ba59178ca1effbb2";
export const url=new URL("../icons/gamepad_up-fill.svg?v=235ddd210da20d820b6ef83781158ac810a385d9be91531b0cd4e0c0994fb542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
