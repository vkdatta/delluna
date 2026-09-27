export const name="vertical_split-fill";
export const id="dl_3d695e7af0c2a3079802";
export const url=new URL("../icons/vertical_split-fill.svg?v=004b5339f13f8ad1f98a8c6e33d7b75387ed58a4dce87d2bf7956e0cb1de359f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
