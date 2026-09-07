export const name="thermometer-cold-light";
export const id="dl_850ed975937b49c29f5e";
export const url=new URL("../icons/T/thermometer-cold-light.svg?v=0790507aea6b355b0b989625cd90a4cc86489de19f3c9daa87e3bda431aca845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
