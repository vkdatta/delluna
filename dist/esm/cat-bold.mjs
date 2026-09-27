export const name="cat-bold";
export const id="dl_39202a0676624583a084";
export const url=new URL("../icons/cat-bold.svg?v=e0861c00a376dc557dd7ec5015b5eff901f566a36600f614f51a33662c1a9da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
