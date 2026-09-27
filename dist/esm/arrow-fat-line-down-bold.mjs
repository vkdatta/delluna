export const name="arrow-fat-line-down-bold";
export const id="dl_88ea0f6a951048d0a5cd";
export const url=new URL("../icons/arrow-fat-line-down-bold.svg?v=6ad0a0fec2e7e6b66b17105995ceed9970e5d3068f3059f04f41dbd052a9a680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
