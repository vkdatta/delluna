export const name="sip";
export const id="dl_42c1fcdb55354ff6a4ca";
export const url=new URL("../icons/sip.svg?v=4677fc1d42b01980e341b7569ab16091fd3349bab8821ea8eff652a373174517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
