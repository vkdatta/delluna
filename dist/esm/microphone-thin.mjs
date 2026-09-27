export const name="microphone-thin";
export const id="dl_6046c539b048428dbbd5";
export const url=new URL("../icons/microphone-thin.svg?v=bf0d733340167d7d5ef1959f7dddad11fce99008a9c3af6a8124b02255af523a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
