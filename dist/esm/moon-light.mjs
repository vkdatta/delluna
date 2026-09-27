export const name="moon-light";
export const id="dl_252066b019374ae192a2";
export const url=new URL("../icons/moon-light.svg?v=792066e7186fd97ec7bbfab26792150615705312eee375c5c7be243358a71b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
