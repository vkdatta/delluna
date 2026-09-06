export const name="google-chrome-logo-duotone";
export const id="dl_0a966e6d16fd400bb0ea";
export const url=new URL("../icons/google-chrome-logo-duotone.svg?v=1d9857e35bc86e926d0360ed5b4f4d669c0155a4f36fdd8d4900c06845b267f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
