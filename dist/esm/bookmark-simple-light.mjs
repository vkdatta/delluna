export const name="bookmark-simple-light";
export const id="dl_151b9d79c1a64e5498e0";
export const url=new URL("../icons/bookmark-simple-light.svg?v=b776fbfb953b9a3d9e850f52bf87884cd3b75a43fbccded2f327ba67ab22cfa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
