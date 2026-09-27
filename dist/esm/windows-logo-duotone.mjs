export const name="windows-logo-duotone";
export const id="dl_ad7de278dd35e26ca96b";
export const url=new URL("../icons/windows-logo-duotone.svg?v=1b375f00adbdb5715a9a8f574d395ca0060b48c440ed6cb41c9188578fecd03e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
