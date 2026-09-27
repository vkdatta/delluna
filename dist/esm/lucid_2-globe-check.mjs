export const name="lucid_2-globe-check";
export const id="dl_5f6ddde44f4c4ac89020";
export const url=new URL("../icons/lucid_2-globe-check.svg?v=9be30039373c8cec43df24a6a0314c530f50b2b34f10536da39f4c500ac2ee4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
