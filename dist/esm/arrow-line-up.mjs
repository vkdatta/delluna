export const name="arrow-line-up";
export const id="dl_76e2f41837584e38b24e";
export const url=new URL("../icons/arrow-line-up.svg?v=a67ec959acc8335b375dc7d8dde291ab84f3bc924e408c8bb10625054a74fc9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
