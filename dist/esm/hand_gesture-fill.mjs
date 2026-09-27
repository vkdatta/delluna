export const name="hand_gesture-fill";
export const id="dl_e2eacc603f70ed4ea231";
export const url=new URL("../icons/hand_gesture-fill.svg?v=53851831ea1f2c289bba3cdde9fcb6e4ae6f77fa8a07c6d9289abc65c7c75299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
