export const name="troubleshoot-fill";
export const id="dl_9cd6abd9f539a7f553f1";
export const url=new URL("../icons/troubleshoot-fill.svg?v=fbfeeb1db42beb84d623e3594babc60b7e29abc6ddce0174df92647d6811ae13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
