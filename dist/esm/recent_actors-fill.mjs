export const name="recent_actors-fill";
export const id="dl_86427aae255d26960cc2";
export const url=new URL("../icons/recent_actors-fill.svg?v=364678b1b6999dc427fcaa3363b512694d3c48bb8622a50ca48ada352aeb80ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
