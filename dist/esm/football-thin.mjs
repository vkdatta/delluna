export const name="football-thin";
export const id="dl_78baa5a5ec5149c7bab5";
export const url=new URL("../icons/football-thin.svg?v=ad0fc730e25424ff3ef4c1bfb31682aaaaa292ac6de5e0c1527892f296e5b375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
