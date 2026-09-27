export const name="cursor-click-bold";
export const id="dl_9956ee124b7c42fcaebc";
export const url=new URL("../icons/cursor-click-bold.svg?v=488a342b4d2ecce2d898c5fbca34316aa7b62cfd6bbd74609e12e904e5129706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
