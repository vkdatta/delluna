export const name="forklift";
export const id="dl_0787d0c414ff70eef62c";
export const url=new URL("../icons/forklift.svg?v=9f9dd4b45eaa439ce703d9d79a9ea3d005bb514add23e660784b643b813044cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
