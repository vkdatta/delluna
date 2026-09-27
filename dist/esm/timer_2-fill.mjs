export const name="timer_2-fill";
export const id="dl_634b49a49ba522779b35";
export const url=new URL("../icons/timer_2-fill.svg?v=816123651191cb52436038c6723444d28d47f6abca8f527cb65eb0455d70127d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
