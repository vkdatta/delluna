export const name="shuffle_on-fill";
export const id="dl_02cde77ff5c8120169f1";
export const url=new URL("../icons/shuffle_on-fill.svg?v=77d322d7d75ece9edfd26821d905e32679c28644b2b692293fe6ed88ced8c261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
