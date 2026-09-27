export const name="bug-beetle-thin";
export const id="dl_34f47cf858f143868c9c";
export const url=new URL("../icons/bug-beetle-thin.svg?v=a98ceb097ce3a53a440d5d1ad3c57e8f03dec1170a0540f0ab1fde89f9c429de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
