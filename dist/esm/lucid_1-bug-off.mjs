export const name="lucid_1-bug-off";
export const id="dl_4ff188a8227e45f496a1";
export const url=new URL("../icons/lucid_1-bug-off.svg?v=7c32da33fbf726e632a3efac22c917a2e229178a20c29fbcc01fb7507a8908af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
