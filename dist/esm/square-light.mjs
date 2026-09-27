export const name="square-light";
export const id="dl_ba3dab3bb45084c7b76e";
export const url=new URL("../icons/square-light.svg?v=e4a3212f343385e5db3d2f5a7459775acf14e55982a14b91667d0d02cd8d52a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
