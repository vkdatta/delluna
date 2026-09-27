export const name="subject";
export const id="dl_c41935d95e471f5ab9e9";
export const url=new URL("../icons/subject.svg?v=f514a9929ed2c077dca5a6e11bb2ae5f49b6ee88d767170bb35e01dd3fcd21f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
