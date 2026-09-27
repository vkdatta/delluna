export const name="running_with_errors";
export const id="dl_96788935dc8568da8694";
export const url=new URL("../icons/running_with_errors.svg?v=2b3f944e64e890b44b2e15cb2e752d7af873afbbddc67b96df1009d0db817a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
