export const name="lucid_3-shield-cog-corner";
export const id="dl_a18e676464e24cab8da6";
export const url=new URL("../icons/lucid_3-shield-cog-corner.svg?v=63ac015587efcd62df3c0fb22f6faea7bca6c3651add9bb0581a0aae4b46a9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
