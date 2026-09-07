export const name="discord-logo";
export const id="dl_0a321f720e8741b69684";
export const url=new URL("../icons/discord-logo.svg?v=87ec676ddbed629a61ef09a4b3131db7889e0fb89e8a036c035b34f77c918d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
