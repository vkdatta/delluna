export const name="pi-bold";
export const id="dl_8b904957a2a94840b614";
export const url=new URL("../icons/pi-bold.svg?v=deaae1eb428b8b78c64faf2f509c372a789c96b8a2a9666ac040b71364bb5a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
