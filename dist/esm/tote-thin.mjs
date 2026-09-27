export const name="tote-thin";
export const id="dl_d7bb0a8a0e73340727e1";
export const url=new URL("../icons/tote-thin.svg?v=5bbd85b473e55e20d98bfb0e005af6544d065eb24f0cf8b29648814659adacf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
