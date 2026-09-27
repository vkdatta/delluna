export const name="medication";
export const id="dl_b5bc04c1bb3318bf21dc";
export const url=new URL("../icons/medication.svg?v=a06b57d69bf583dd3d63c898e44955170e86d321ec4dce6ccc9fa8de80863ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
