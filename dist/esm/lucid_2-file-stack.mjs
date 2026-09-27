export const name="lucid_2-file-stack";
export const id="dl_d6d604b534cb44bb8362";
export const url=new URL("../icons/lucid_2-file-stack.svg?v=1fb9208e9a29638be292a5eca083330bbbef7160289fdc600a68474befe05d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
