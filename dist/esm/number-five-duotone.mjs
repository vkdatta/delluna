export const name="number-five-duotone";
export const id="dl_5534ffe68da14694b80d";
export const url=new URL("../icons/number-five-duotone.svg?v=ec86e1bd6bf696776b8dee8ab9ce88a6988c38c5608727aa1b3d0c96945a8e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
