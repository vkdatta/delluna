export const name="arrow-fat-lines-down-duotone";
export const id="dl_4df2bff269b44387ab6c";
export const url=new URL("../icons/arrow-fat-lines-down-duotone.svg?v=22075ad7f0583f5161699174f68e55461bd7ca4b72774500385147bd6f68e2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
