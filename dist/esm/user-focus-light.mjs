export const name="user-focus-light";
export const id="dl_5653e082bcac4ca791a9";
export const url=new URL("../icons/U/user-focus-light.svg?v=f32b2a3d19a0996c335ed9ce98f643a1aa540303ecb913afee2d4ef1970515a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
