export const name="picture_in_picture_small";
export const id="dl_e350c83e1a66b436d96c";
export const url=new URL("../icons/picture_in_picture_small.svg?v=afcf7e852e5fd747eac66aa4bf95c0f966064d2e39141a4f31d09c30d179dd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
