export const name="subset-proper-of-thin";
export const id="dl_3a9f9ed471771ceffed8";
export const url=new URL("../icons/subset-proper-of-thin.svg?v=68a7431fd9aa04935c19f49842be0fcf97d66992127c9678130ecd568b157e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
