export const name="mountains-thin";
export const id="dl_9c4dbef3511f46b491dd";
export const url=new URL("../icons/mountains-thin.svg?v=47271979d6d08584ac1a97586102f4ac6f9d5297afeed0f4d90d36c3ad30e08e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
