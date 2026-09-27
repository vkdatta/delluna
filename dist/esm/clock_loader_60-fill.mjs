export const name="clock_loader_60-fill";
export const id="dl_543fc6e69443d4252a2e";
export const url=new URL("../icons/clock_loader_60-fill.svg?v=178f8bbfe387b0fd75f93de1b08e91b48f7f2b3e7b2e646610a535db8c0e32c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
