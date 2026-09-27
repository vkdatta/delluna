export const name="warning-circle-thin";
export const id="dl_1aaf3947de1cb4860a55";
export const url=new URL("../icons/warning-circle-thin.svg?v=e8badca2d0efb90b96e63abd3b83815aff8e7ff710d7b05a6e3c38d9d8bf0e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
