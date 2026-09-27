export const name="work";
export const id="dl_76f8257c195ce82e8366";
export const url=new URL("../icons/work.svg?v=df39a06040aa1a1dc9eee58b44cc5bda881f276fede2ca42ab255d2695e644f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
