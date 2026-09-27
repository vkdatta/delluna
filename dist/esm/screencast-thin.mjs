export const name="screencast-thin";
export const id="dl_ee2a9713e5c6b6ea3d62";
export const url=new URL("../icons/screencast-thin.svg?v=50cec8b0de7b00e3b8d015566b5384fbf51ef4648ef5da6fd8bb601a13dac60f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
