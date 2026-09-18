export const name="woman_2-fill";
export const id="dl_d27f151e29d744f79071";
export const url=new URL("../icons/woman_2-fill.svg?v=4862a344fab0bbac965e94a4eb9648119ea9d15ef004d0db0ebfeacbaa251635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
