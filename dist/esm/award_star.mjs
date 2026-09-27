export const name="award_star";
export const id="dl_598c94bd9cebe2da7a6f";
export const url=new URL("../icons/award_star.svg?v=197988bdf9ab0bd50da16a6e94990c8de70d0ce0cf3e602b23e6bf1ad681ba80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
