export const name="arrow-clockwise-bold";
export const id="dl_0b62be8a32604e09b682";
export const url=new URL("../icons/arrow-clockwise-bold.svg?v=773d814cdf564a4d0db6e0408a60e5bd97c76c90293aaf383c72399ce2e034a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
