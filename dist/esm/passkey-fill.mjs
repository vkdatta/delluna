export const name="passkey-fill";
export const id="dl_71dd5deabb913cb1164a";
export const url=new URL("../icons/passkey-fill.svg?v=b1b4edf8a34db53b8a70656fd385c6ffdd30589e4664e1fda0ea014e1d8e256e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
