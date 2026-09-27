export const name="phone-slash-thin";
export const id="dl_5f6108ff66d74477a2cc";
export const url=new URL("../icons/phone-slash-thin.svg?v=1ba4d4281866c0c09b0c5042cb91361f2b6db28e9af6d13b33336a7d511d44bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
