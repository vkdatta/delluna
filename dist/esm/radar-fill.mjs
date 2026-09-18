export const name="radar-fill";
export const id="dl_5357ba956f64414dbefc";
export const url=new URL("../icons/R/radar-fill.svg?v=289f84fbbf52a2acf067725a66f7f5c1cbabd99a3fa0820681fbe622b1fc0f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
