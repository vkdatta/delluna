export const name="campfire";
export const id="dl_0df18f6050934da5b4a1";
export const url=new URL("../icons/campfire.svg?v=73c3a8907de728f5d7941412ec63bbe6a70c06eb6dc0b591b9618c6b81c438bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
