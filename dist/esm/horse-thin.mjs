export const name="horse-thin";
export const id="dl_9e994a19339842ef8166";
export const url=new URL("../icons/horse-thin.svg?v=57700fff8702573b5836307c8a74f65c4f31765973f79024018fce26e195a125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
