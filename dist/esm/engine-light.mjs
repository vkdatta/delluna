export const name="engine-light";
export const id="dl_bf235ca793bc46f2ad38";
export const url=new URL("../icons/engine-light.svg?v=ee09af68234c15c0421e903752f1e571591eca638712678c10de7bed4f79fc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
