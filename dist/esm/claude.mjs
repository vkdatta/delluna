export const name="claude";
export const id="dl_b50308affa593a8df9ed";
export const url=new URL("../icons/claude.svg?v=1905952ff744babdfe676657ccd36120bc9d8b3bfa5aa53a7b1b9b2c62633fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
