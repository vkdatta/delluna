export const name="align-center-vertical-duotone";
export const id="dl_5f59df9d568e4bd2a04f";
export const url=new URL("../icons/align-center-vertical-duotone.svg?v=2cb73cd910823831cbbea151590ee17ea33cd3120b6ca300ed73f19757481978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
