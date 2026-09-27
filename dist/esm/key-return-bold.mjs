export const name="key-return-bold";
export const id="dl_ad0d08908a0c4ae9a359";
export const url=new URL("../icons/key-return-bold.svg?v=81e3c3557cf3bbbc0dbfd456bbf435116c94ff69392a3a7ae9b470d6535e2d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
