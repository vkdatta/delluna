export const name="dots-three-outline-bold";
export const id="dl_1232a2295b534cdd9902";
export const url=new URL("../icons/dots-three-outline-bold.svg?v=61d917c8394ab3bfa55e6112e83de258d58fee5c06fba63cd9fb7f2cdd650e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
