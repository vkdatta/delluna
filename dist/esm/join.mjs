export const name="join";
export const id="dl_36b155d10654ba17c25f";
export const url=new URL("../icons/join.svg?v=d071f5d20645d330a2df7295d75237210e7487264b8b43808ed21c7f54141265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
