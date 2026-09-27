export const name="battery-high-duotone";
export const id="dl_7e33de5a764d4b2c814e";
export const url=new URL("../icons/battery-high-duotone.svg?v=df0236b73493901bded70850e8fff3ec4722f4b752a20f02600cbc6a161f3f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
