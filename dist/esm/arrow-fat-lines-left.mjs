export const name="arrow-fat-lines-left";
export const id="dl_cdaa392eba3843a0b0c8";
export const url=new URL("../icons/arrow-fat-lines-left.svg?v=bd94c566df7a0d450dd0221a0e6cedb0c7d9e1435e41d196a40417759cd68cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
