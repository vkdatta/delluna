export const name="cloud-fog";
export const id="dl_8a99760c9b0b4ee1a59e";
export const url=new URL("../icons/cloud-fog.svg?v=718e2223a5fd5b074b94731c09e7a41ef74434e38505ce184a9725cf57c14ee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
