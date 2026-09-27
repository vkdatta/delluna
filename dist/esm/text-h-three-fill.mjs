export const name="text-h-three-fill";
export const id="dl_c214acf4c1039912ce1f";
export const url=new URL("../icons/text-h-three-fill.svg?v=e7099170bb0730c329e3b085f8b7895e82318ed4e1e13521e894f6a9f662d430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
