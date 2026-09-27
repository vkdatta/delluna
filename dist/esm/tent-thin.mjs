export const name="tent-thin";
export const id="dl_cda0c8ea7bf84ac1aeb0";
export const url=new URL("../icons/tent-thin.svg?v=c57481b262195ec6eaea8330bafcd1caeb0dc5e9363cddbaf40b09930940ad03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
