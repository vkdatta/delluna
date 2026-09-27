export const name="user-switch-thin";
export const id="dl_7f347043b57d6111230d";
export const url=new URL("../icons/user-switch-thin.svg?v=032dd60f482e17d20cb77becaf4793df54792536f609c55869bba488d79c5ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
