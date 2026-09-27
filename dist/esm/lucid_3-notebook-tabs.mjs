export const name="lucid_3-notebook-tabs";
export const id="dl_a41e8e8ea625434c9973";
export const url=new URL("../icons/lucid_3-notebook-tabs.svg?v=9c1a2a9819c09d941abecb42c1cf238ccf3e4664bc77fa8eb743c50e6631d140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
