export const name="person_remove-fill";
export const id="dl_a3d8b4b6f0f89db8c6b7";
export const url=new URL("../icons/person_remove-fill.svg?v=8a17d295f3c7410e060ec251e1e038906da09a932763fb86e7534b6059c94375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
