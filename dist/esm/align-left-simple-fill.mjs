export const name="align-left-simple-fill";
export const id="dl_6e32113b3211494cbc54";
export const url=new URL("../icons/align-left-simple-fill.svg?v=bde055cf7ce59de084f309a44742a19af310b051f2cd1bfdab1f9e0b88ed91a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
