export const name="check-light";
export const id="dl_dd56f479ae5c4a7e82dc";
export const url=new URL("../icons/check-light.svg?v=0aa2dece5e45fee2e32c4d62d6b9a9cebc32a4ebed9d7e9732e2a27ba2a884f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
