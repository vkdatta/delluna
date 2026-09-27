export const name="mood-fill";
export const id="dl_2ed91fc35c601c2ddef1";
export const url=new URL("../icons/mood-fill.svg?v=216d0b2695a648b9b79de870dc2af7b1152b01087118f51100f570f6d48a4b9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
