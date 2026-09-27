export const name="beer-stein-thin";
export const id="dl_807a3aa6de324fb19685";
export const url=new URL("../icons/beer-stein-thin.svg?v=8c1fb084edfd9a6d4662955a2611d2303c43d57c715438c079cf7e4125d97403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
