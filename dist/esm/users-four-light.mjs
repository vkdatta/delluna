export const name="users-four-light";
export const id="dl_4888f653ca3555848aa1";
export const url=new URL("../icons/users-four-light.svg?v=513a9d975d617a77f7cff28b4f501cd835ae5569ca0ab358404072b5f7a5a485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
