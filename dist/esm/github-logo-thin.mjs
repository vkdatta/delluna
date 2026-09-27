export const name="github-logo-thin";
export const id="dl_e650e9268da64476ace0";
export const url=new URL("../icons/github-logo-thin.svg?v=0c82f54e614c304c658d5d54efc748988732972ff6df12f2aa60240df4370b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
