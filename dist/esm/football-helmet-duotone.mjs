export const name="football-helmet-duotone";
export const id="dl_94bdd4256ccd45359e1a";
export const url=new URL("../icons/football-helmet-duotone.svg?v=e1c730e50424606cefeba26d93a3240ed355b3604cf4edf773d7a59e8dca5566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
