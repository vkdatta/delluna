export const name="circle";
export const id="dl_78d3e9d0a54c487e994c";
export const url=new URL("../icons/circle.svg?v=715419264241a9448f229145fc1ed9cb9744112171482fdf3dec8d0694d056d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
