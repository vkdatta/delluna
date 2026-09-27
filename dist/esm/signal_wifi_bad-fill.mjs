export const name="signal_wifi_bad-fill";
export const id="dl_db404bc172ccce337a3b";
export const url=new URL("../icons/signal_wifi_bad-fill.svg?v=6b845fd85b9b3a7481109d9eb72f15c266a54bcee9755043ee0805878397a419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
