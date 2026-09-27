export const name="queue-light";
export const id="dl_1aeb31721c4d462fa682";
export const url=new URL("../icons/queue-light.svg?v=9e6131fe21d4264fa576978c388c053ada46fbb1d4653ef5cd2e3499b21247ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
