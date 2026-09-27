export const name="not-subset-of-duotone";
export const id="dl_30f289a7a6b544f58f6f";
export const url=new URL("../icons/not-subset-of-duotone.svg?v=7cde8b5b70ee4f819a607f1f989d2e6b0f4a7c727155cccdf6c74dcde96167d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
