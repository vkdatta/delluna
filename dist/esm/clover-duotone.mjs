export const name="clover-duotone";
export const id="dl_d75940478f8e4d6fbfb6";
export const url=new URL("../icons/clover-duotone.svg?v=0237a22741c0ea975d2e9d4c4dddd6da723113681b6fd2c2c9434f49567a522a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
