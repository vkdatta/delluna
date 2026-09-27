export const name="e911_avatar-fill";
export const id="dl_bad0b71b079277ec2c86";
export const url=new URL("../icons/e911_avatar-fill.svg?v=74e44941b3c032bb5913b469ca30fed10f568708c0766aeb04be2a667e5b38b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
