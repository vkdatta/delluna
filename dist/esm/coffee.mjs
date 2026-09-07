export const name="coffee";
export const id="dl_cd573d274d93458f9ed2";
export const url=new URL("../icons/coffee.svg?v=4ef8c4f0643ee992bf05f10c51c06d695f5ef924e0a1c85394b7626b548338fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
