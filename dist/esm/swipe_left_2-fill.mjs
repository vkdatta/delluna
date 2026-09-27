export const name="swipe_left_2-fill";
export const id="dl_77327c6b960919ea0c94";
export const url=new URL("../icons/swipe_left_2-fill.svg?v=6ce5a989d1bb10eab33264f1cdb17fcd4db9458114d2f4a57bde93d314a4cac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
