export const name="trend-up-bold";
export const id="dl_05d460b5ee6816826f7d";
export const url=new URL("../icons/trend-up-bold.svg?v=14a41b776c2aefc4fb3e0950b32e59ea68044574e0289eefc86bbffe150a75cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
