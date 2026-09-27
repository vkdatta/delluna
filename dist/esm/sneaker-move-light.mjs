export const name="sneaker-move-light";
export const id="dl_894c92cba532210e2dd7";
export const url=new URL("../icons/sneaker-move-light.svg?v=655764df6be6802f1f49426312a4ff458296bb5626a810d9e491259f0dbb54e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
