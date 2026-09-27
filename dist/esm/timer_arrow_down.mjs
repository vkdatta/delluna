export const name="timer_arrow_down";
export const id="dl_2f87f437cd1236563b6a";
export const url=new URL("../icons/timer_arrow_down.svg?v=2bdc48fbbf441cf0229e385b92be0f80cbb90b6fa34441ac584e01a864fb5110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
