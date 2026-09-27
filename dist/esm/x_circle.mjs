export const name="x_circle";
export const id="dl_695d7ace6f7a2e5e6cff";
export const url=new URL("../icons/x_circle.svg?v=efa498812ea27c6c8fe69fd8be082bd0e5ddf25032a92f6b68d8ccbda3525493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
