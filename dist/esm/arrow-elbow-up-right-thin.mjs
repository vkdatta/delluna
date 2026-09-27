export const name="arrow-elbow-up-right-thin";
export const id="dl_55ee4127fe234874bcb9";
export const url=new URL("../icons/arrow-elbow-up-right-thin.svg?v=1878db59b96dc42e7d9c1d98be38e4a840f852f7bec1e66f9718e03a53068c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
