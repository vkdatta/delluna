export const name="guitar-thin";
export const id="dl_cb9c76ad17614b639d7b";
export const url=new URL("../icons/guitar-thin.svg?v=727b709b6730398fe51a90f826f84a2b34b54fc5fd0924f37067043fab171809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
