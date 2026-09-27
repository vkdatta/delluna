export const name="arrow-up-light";
export const id="dl_2467e144911d4e7bbca1";
export const url=new URL("../icons/arrow-up-light.svg?v=84acec50fdb5e2eed241099737f02d55d2e502a7808aeec80da45d4f847befcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
