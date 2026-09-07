export const name="sun-horizon-duotone";
export const id="dl_735e4aefc1ec46109323";
export const url=new URL("../icons/S/sun-horizon-duotone.svg?v=cfc2941fe0deb4df93b432ef35d8a4a0b69ff13a8076e954be2dd9a64e94db0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
