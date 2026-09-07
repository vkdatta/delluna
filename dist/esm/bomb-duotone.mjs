export const name="bomb-duotone";
export const id="dl_7cab67acb8e54316b840";
export const url=new URL("../icons/bomb-duotone.svg?v=5d432ae70704ee1b4092eb0b5c847d434edcd3b09eb16251b6367d448128dbde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
