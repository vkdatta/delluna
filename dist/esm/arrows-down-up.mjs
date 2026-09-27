export const name="arrows-down-up";
export const id="dl_e5d1da6626df494a929a";
export const url=new URL("../icons/arrows-down-up.svg?v=fc0bfed015d4d70c1fcba4d2bafc7798839368674f6438593a69c2df0617c59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
