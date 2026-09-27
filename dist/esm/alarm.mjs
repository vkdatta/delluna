export const name="alarm";
export const id="dl_8477b5ef4f8f4ca5853a";
export const url=new URL("../icons/alarm.svg?v=6f4ea38ba951dac5034da54abde7753f900746cfce3f0c1493f9df7a60b5b187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
