export const name="signal_cellular_pause";
export const id="dl_09df6fe04a4be0796188";
export const url=new URL("../icons/signal_cellular_pause.svg?v=bff0cd627fecca966db52aca6cb06b9f457bbd35ce63af224b6eb335c0db8113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
