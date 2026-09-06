export const name="arrow-elbow-left-bold";
export const id="dl_7067c002a6cc4b80bf7b";
export const url=new URL("../icons/arrow-elbow-left-bold.svg?v=7358e2d30aa404a46e839bf3d6897303a5dde1f065c8bd15ba134738e008eebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
