export const name="speaker-simple-none-thin";
export const id="dl_18be04d8c1f84bc5b7d6";
export const url=new URL("../icons/speaker-simple-none-thin.svg?v=f96318fcec7e7fc581d3d0a48c65566cfa4513abd399ff8c717f1d380878ac0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
