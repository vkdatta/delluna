export const name="thermometer-cold";
export const id="dl_76a035f90bdc41ad8135";
export const url=new URL("../icons/T/thermometer-cold.svg?v=5bf098c3543ac8591c6cbb0e3ad30f460f228cc28d190d54739a13822f5bbe03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
