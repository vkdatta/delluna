export const name="propane-fill";
export const id="dl_271d8a48d8e34703a8d4";
export const url=new URL("../icons/P/propane-fill.svg?v=962f790d8926b210fc11232d356984de6850750d291f63553a7bdfe8aaee2d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
