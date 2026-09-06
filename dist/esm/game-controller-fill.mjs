export const name="game-controller-fill";
export const id="dl_8daa2462cf6742908ee8";
export const url=new URL("../icons/game-controller-fill.svg?v=9dcb7af7b4854bb2da15ab1852292428c4d95314b06cd25aa5f45f21b3134884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
