export const name="battery_horiz_000";
export const id="dl_5df7b78cd8e44197a45a";
export const url=new URL("../icons/battery_horiz_000.svg?v=2e1044d3dcdde879cc525e7aec0728cbc0047cc531bda5c969da84dcef44975f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
