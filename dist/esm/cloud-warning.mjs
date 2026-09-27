export const name="cloud-warning";
export const id="dl_8eb73ad5c8ca47548249";
export const url=new URL("../icons/cloud-warning.svg?v=634f47f3ba1a1ffedb5a7fe02f36bf86bfd1b6cf5f89db14f47dbd275ea0c20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
