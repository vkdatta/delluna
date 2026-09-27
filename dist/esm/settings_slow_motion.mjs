export const name="settings_slow_motion";
export const id="dl_bf723899409f66bf9509";
export const url=new URL("../icons/settings_slow_motion.svg?v=9147fd6347a481a40a46fd524227510a39b97904052efb87820a9751c9ce2cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
