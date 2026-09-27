export const name="share";
export const id="dl_850b12f1e50e00894833";
export const url=new URL("../icons/share.svg?v=d0a0abe66c1ce8b59baeecb628fdcb4c72a7774c2da6eba6a04a1551cb1778fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
