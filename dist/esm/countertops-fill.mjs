export const name="countertops-fill";
export const id="dl_8607cdf40b21e3b842a5";
export const url=new URL("../icons/countertops-fill.svg?v=2ba22611e9a87e94c515248c77fb49623197a116a97588de35974b63c5b2ef6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
