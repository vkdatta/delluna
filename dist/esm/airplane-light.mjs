export const name="airplane-light";
export const id="dl_6cd0688bf9dd4b068ffa";
export const url=new URL("../icons/airplane-light.svg?v=570959c14146da17831048ed4e7f7179ea544f95effe331040c5e2aa1e2a2819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
