export const name="line-vertical-thin";
export const id="dl_21aa279c8950477e86eb";
export const url=new URL("../icons/line-vertical-thin.svg?v=efba99283c49904602b136ab963faad82a277d0a453059efe11efc3629a73fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
