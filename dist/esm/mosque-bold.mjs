export const name="mosque-bold";
export const id="dl_38f28b2c0b644db8b1f5";
export const url=new URL("../icons/mosque-bold.svg?v=7dce9dde8ab6326f3e605ad64feb9b08dc6294a1f077a86dbc994c6ad69ff1e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
