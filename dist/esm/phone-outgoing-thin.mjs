export const name="phone-outgoing-thin";
export const id="dl_60951c99fd094c269958";
export const url=new URL("../icons/phone-outgoing-thin.svg?v=2a2f387bad2f55b47e25afaa1a6843ef44a099d6b5dab0651615b33f6cf3c1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
