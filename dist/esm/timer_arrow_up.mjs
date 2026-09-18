export const name="timer_arrow_up";
export const id="dl_8190dcae5cfc4e1aba5b";
export const url=new URL("../icons/timer_arrow_up.svg?v=f963493a97fdf8e04a9ef169988ba698f1dfd71ab1bc9803cab037016f5f062e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
