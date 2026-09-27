export const name="nest_connect";
export const id="dl_18bed00e5af825e47487";
export const url=new URL("../icons/nest_connect.svg?v=f5780ee71b5636d962a84d0b5daf7bedff98552066423cd7eb78296ab1d46977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
