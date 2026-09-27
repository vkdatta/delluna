export const name="toolbox-bold";
export const id="dl_d4a499cf1aed0a1cb874";
export const url=new URL("../icons/toolbox-bold.svg?v=8daf60cbadf15d297ce6af9f1bd5e85ca6929ea32a75afd37072d82c51a5aaef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
