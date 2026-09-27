export const name="add";
export const id="dl_0363c0eb9fdf7047e1d9";
export const url=new URL("../icons/add.svg?v=8d9c0d2189acd00fbf227ac2de6e16a755efe5bc67a6c82b4899c4e1477160f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
