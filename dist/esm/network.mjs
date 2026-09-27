export const name="network";
export const id="dl_cc8d626c6f064e5db764";
export const url=new URL("../icons/network.svg?v=3dc3e6ce25aa6a5abd419b8fa0c42090813253e30cc2f7e2b9633b1654903de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
