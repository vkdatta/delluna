export const name="mouse-left-click-light";
export const id="dl_3d7d99b303f8460e833d";
export const url=new URL("../icons/mouse-left-click-light.svg?v=e7cc620c80f9cb3c23c7d8b67743f15e2da513992f9b32f40342dde21f392032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
