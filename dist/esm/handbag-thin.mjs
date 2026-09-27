export const name="handbag-thin";
export const id="dl_91036a2947d0470fafeb";
export const url=new URL("../icons/handbag-thin.svg?v=adb86b4e1b578e6baec087afbaab7f9d6bace7fb6975033da2e4e14968eefc06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
