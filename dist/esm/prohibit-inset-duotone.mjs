export const name="prohibit-inset-duotone";
export const id="dl_616cb0620f9a49689696";
export const url=new URL("../icons/prohibit-inset-duotone.svg?v=355c462769d56c5831229196cb2ea33012e125af9cbfff6847c37edb8b65e419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
