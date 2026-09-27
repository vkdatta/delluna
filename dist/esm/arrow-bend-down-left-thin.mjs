export const name="arrow-bend-down-left-thin";
export const id="dl_e2a772375bd04d8092fc";
export const url=new URL("../icons/arrow-bend-down-left-thin.svg?v=38852b866c4a22cccd2fb2e3aa41024861638d60b7237519e22b8611d8eb521b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
