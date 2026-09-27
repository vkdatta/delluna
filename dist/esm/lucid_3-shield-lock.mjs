export const name="lucid_3-shield-lock";
export const id="dl_8e5b2c1c96de4dc5b0ff";
export const url=new URL("../icons/lucid_3-shield-lock.svg?v=0c6aee4fdd598950e58ff08847f80ff4aecf079594ca64553c797485aeefbd78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
