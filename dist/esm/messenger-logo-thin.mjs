export const name="messenger-logo-thin";
export const id="dl_8dd6d273c16244189386";
export const url=new URL("../icons/messenger-logo-thin.svg?v=bc22834846fe656b32275e0d65b6e238aa3e368dfcbf25b396d99762b7ae9bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
