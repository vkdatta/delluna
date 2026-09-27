export const name="mask-sad-thin";
export const id="dl_a70a322240ba48c7936b";
export const url=new URL("../icons/mask-sad-thin.svg?v=1a5569047680258ab94af8fa237088931c1f6e52d833efc4c42054228e567e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
