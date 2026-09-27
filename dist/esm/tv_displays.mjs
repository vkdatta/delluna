export const name="tv_displays";
export const id="dl_969fb79142b689679b99";
export const url=new URL("../icons/tv_displays.svg?v=cacb98b02ffc228bbf8a4aeb30d94aad6d8a3151675dfd4d49fa3e1f806d1fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
