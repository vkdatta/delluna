export const name="trash-2";
export const id="dl_45a3af58b26646a7b00a";
export const url=new URL("../icons/trash-2.svg?v=79fe24bd8d95d9be62a6814261cf0cad83ef125917be0c92b3d1cdd7476ce6e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
