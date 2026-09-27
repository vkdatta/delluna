export const name="do_not_touch-fill";
export const id="dl_2ebb7a82dc998c979103";
export const url=new URL("../icons/do_not_touch-fill.svg?v=51565aba320c59d170af4d0d11632c90716f2372dd1ed26a45824f6d460f79c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
