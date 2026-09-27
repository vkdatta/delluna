export const name="list-bullets-bold";
export const id="dl_ecbc60937e6541009fb0";
export const url=new URL("../icons/list-bullets-bold.svg?v=28ba9f6f827328f0c6484287c32ee606742a98f1add11cb8307945e22284c571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
