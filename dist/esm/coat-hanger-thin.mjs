export const name="coat-hanger-thin";
export const id="dl_91607b75d94540b29520";
export const url=new URL("../icons/coat-hanger-thin.svg?v=a06836c156e92222c74aedd74d631d6b5e1089b074af4d8cf75ac66fdd11db73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
