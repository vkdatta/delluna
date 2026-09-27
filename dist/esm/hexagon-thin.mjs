export const name="hexagon-thin";
export const id="dl_74fb8f7fbdf04ccb9861";
export const url=new URL("../icons/hexagon-thin.svg?v=ef81c92f83e94b87ce6de306f402de908d58bee1d0104677126542a08d7aae0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
