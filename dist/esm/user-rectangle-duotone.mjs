export const name="user-rectangle-duotone";
export const id="dl_8e85639e3f98b101ceb4";
export const url=new URL("../icons/user-rectangle-duotone.svg?v=275df2fec4e3376df89dd12fc79f83da8486cface65e4e9c9358b9552d84bdb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
