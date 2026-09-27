export const name="traffic-cone-thin";
export const id="dl_9f4e0d24f4c9c5a5125c";
export const url=new URL("../icons/traffic-cone-thin.svg?v=255d5a7e8d22498fd24cc8162c542686cfe85f6ed15e58ffa2111d4291774751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
