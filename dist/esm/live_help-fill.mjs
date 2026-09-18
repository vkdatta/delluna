export const name="live_help-fill";
export const id="dl_9e12dce8cb1a4f70bb70";
export const url=new URL("../icons/live_help-fill.svg?v=ceef1a97a73e3ea86607db28923dc0899b0c2dda28d55fea97c1c73b92b41d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
