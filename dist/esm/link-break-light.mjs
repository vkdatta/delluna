export const name="link-break-light";
export const id="dl_4ff2d9384e4348a29105";
export const url=new URL("../icons/link-break-light.svg?v=ca845087244b8f18aeaf79c6c0e3566d9a65db13030afba613cfd67bf94a6bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
