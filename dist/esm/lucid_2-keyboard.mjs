export const name="lucid_2-keyboard";
export const id="dl_4a4382f07352449699e5";
export const url=new URL("../icons/lucid_2-keyboard.svg?v=d89283971e2ef84a769f8b6171ad541e2bb676d76fed6c4150090b5b2cf32002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
