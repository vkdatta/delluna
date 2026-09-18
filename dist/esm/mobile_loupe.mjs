export const name="mobile_loupe";
export const id="dl_1d730a79f3c3425abe1b";
export const url=new URL("../icons/M/mobile_loupe.svg?v=4cd639e5331c164c4105d18b4e67f882ae1490fe824f899207218e0044b9b1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
