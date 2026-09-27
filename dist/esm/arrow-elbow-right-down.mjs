export const name="arrow-elbow-right-down";
export const id="dl_011717ec590a47b4b750";
export const url=new URL("../icons/arrow-elbow-right-down.svg?v=a337d089340961646d943e6f5502645b7bc50de6ecabd2012e2353a077cd7a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
