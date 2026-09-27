export const name="desktop-tower-bold";
export const id="dl_6aaa6638475944088af5";
export const url=new URL("../icons/desktop-tower-bold.svg?v=3e4bcccbebcdc38ff66d2306d582c3305ede818938fa22f0c7218f4b00ddc700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
