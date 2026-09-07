export const name="pencil-slash-bold";
export const id="dl_b59773474fe6499780b9";
export const url=new URL("../icons/pencil-slash-bold.svg?v=147cd3877dc00b110c5e9a0207bcb10d7835af1e21de53a4385cd0bf48ac1af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
