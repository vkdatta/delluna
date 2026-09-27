export const name="users-three";
export const id="dl_6088fd99a81fcf45fa72";
export const url=new URL("../icons/users-three.svg?v=68461672997f8d98d1f07094eda22971dcb3f3af672aa55a87fbabd3be9a1acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
