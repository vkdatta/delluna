export const name="article-ny-times-bold";
export const id="dl_2c60b709e9c3414f8b1c";
export const url=new URL("../icons/article-ny-times-bold.svg?v=0c53a8e566d4a8c19dd0bb9b8ec4af0b9ea5536028001e87a184a32c866b9c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
