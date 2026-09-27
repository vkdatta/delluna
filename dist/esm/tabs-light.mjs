export const name="tabs-light";
export const id="dl_94e4466c552105491f98";
export const url=new URL("../icons/tabs-light.svg?v=307c08d779799cb11a4216ddee2eba4baad7ba72713e416450b29206eb90c4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
