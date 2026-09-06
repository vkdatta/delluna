export const name="hand-eye-thin";
export const id="dl_fe5ec59c7553421e859f";
export const url=new URL("../icons/hand-eye-thin.svg?v=207786f0024b84b9feddb4367324147ddb4f01e71d8d1b0f70ed4c0e697b34d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
