export const name="paperclip-horizontal-light";
export const id="dl_85eccc54d21d4deb8137";
export const url=new URL("../icons/paperclip-horizontal-light.svg?v=1c7a71883db2499f5d15ae7c54c85380c19113e375642a0d6e9db9527619fc29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
