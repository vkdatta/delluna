export const name="caret-down-thin";
export const id="dl_6ca02020c0704f5596c2";
export const url=new URL("../icons/caret-down-thin.svg?v=a83b14e14b97edec7427188d7926f9a2d5a6592c38ae6ee82999981fc0f304a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
