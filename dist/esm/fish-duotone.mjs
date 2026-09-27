export const name="fish-duotone";
export const id="dl_1d7b7c0eb9d64b558ab2";
export const url=new URL("../icons/fish-duotone.svg?v=0f24ac52b6c582e861f1331dc25ae1b5749db802ca1ab5ffac4e094032153d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
