export const name="timer_play";
export const id="dl_2d54f9edc0f846609df5";
export const url=new URL("../icons/T/timer_play.svg?v=9e98ae514b3d30f5f87145e8ea0dc4c7abe3c354b417974f4bc28f798918b6e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
