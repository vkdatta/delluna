export const name="edit_arrow_up";
export const id="dl_1a852326cddd4dbab40a";
export const url=new URL("../icons/E/edit_arrow_up.svg?v=f33fd4abb4106a2f6e4d80fe79e1a7d6dff94c52d914a62c3faf9ca43d12e92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
