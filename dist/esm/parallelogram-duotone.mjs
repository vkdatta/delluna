export const name="parallelogram-duotone";
export const id="dl_7f7da5c661064860bf6b";
export const url=new URL("../icons/parallelogram-duotone.svg?v=458415d0766767c910f20e43aa6556690c94e3e5e1d8c66aaac0caa09b95123b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
