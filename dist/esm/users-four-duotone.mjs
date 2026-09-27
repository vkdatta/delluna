export const name="users-four-duotone";
export const id="dl_42f58b2e21b44d212066";
export const url=new URL("../icons/users-four-duotone.svg?v=d4bec2e1d2f492d225e5f788fda3ddb5bf67c4fe43ed697b4010cd6fdb7fcb4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
