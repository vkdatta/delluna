export const name="shuffle-angular-duotone";
export const id="dl_930e7353f73c535024cc";
export const url=new URL("../icons/shuffle-angular-duotone.svg?v=1ff5e59e6679a88785e222571c2aa7666d356449c1950c4527f1919e55306e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
