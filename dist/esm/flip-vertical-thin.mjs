export const name="flip-vertical-thin";
export const id="dl_8201b73c42d244fc93f6";
export const url=new URL("../icons/flip-vertical-thin.svg?v=3fdb4f5c273fb32845c0b184990b5b112ead13eb8ced2a7b2903e30ff5e6c636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
