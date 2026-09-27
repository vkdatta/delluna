export const name="clock-afternoon";
export const id="dl_ff893ca59bc94bf38f33";
export const url=new URL("../icons/clock-afternoon.svg?v=4d5be06bf7fa4eb4770f1e3e8f6afa069e24a25e092b2b535836f24337497e52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
