export const name="tire-thin";
export const id="dl_d5beb4de797e4232b9ca";
export const url=new URL("../icons/T/tire-thin.svg?v=9e238ab0753c16283b7369c071e58de71f1b6fe4254c9169e9239f11e972bca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
