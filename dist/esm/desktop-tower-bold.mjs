export const name="desktop-tower-bold";
export const id="dl_6aaa6638475944088af5";
export const url=new URL("../icons/desktop-tower-bold.svg?v=25310d26c28784c921caa05df239c00aff30d351fa2269d075394e70f18367be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
