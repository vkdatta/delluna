export const name="rss-thin";
export const id="dl_81ca9b931b144e9c9faf";
export const url=new URL("../icons/rss-thin.svg?v=384e3ee9732e0feaf9350c704c48983b62f5195f57600422a04aec65aec2cea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
