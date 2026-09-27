export const name="align-center-horizontal-simple-bold";
export const id="dl_465fe3043ff94d0d9ff0";
export const url=new URL("../icons/align-center-horizontal-simple-bold.svg?v=b729eb83494e3c08ad4b88745f6f60228774f46cb76ca8465d40d0256309fbb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
