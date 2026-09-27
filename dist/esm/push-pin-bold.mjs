export const name="push-pin-bold";
export const id="dl_9b17b604f7554c70b7c8";
export const url=new URL("../icons/push-pin-bold.svg?v=81c387ac738fdb0617be2b736cd3999fb8a56409aaa997b43d9231808e13af65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
