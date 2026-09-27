export const name="lucid_1-arrow-up-1-0";
export const id="dl_88d16836e2ac41afa3da";
export const url=new URL("../icons/lucid_1-arrow-up-1-0.svg?v=65329e5c9a59933f6b4f9f5e2290145245a5eae2280782f70558ae6bd8b83c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
