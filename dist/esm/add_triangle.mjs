export const name="add_triangle";
export const id="dl_4c5b9b84492dc96389fd";
export const url=new URL("../icons/add_triangle.svg?v=e164dec2e8965987c37828e532f97fd9d2ecd5333c4e5557f3c5404835aa29b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
