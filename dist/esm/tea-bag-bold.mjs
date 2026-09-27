export const name="tea-bag-bold";
export const id="dl_17e3d96e5421bcca7aa3";
export const url=new URL("../icons/tea-bag-bold.svg?v=e1273c74f660bc63a3c9648d1aa08906a8efa1aa7ac1aee3fdbd7d551b2f1930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
