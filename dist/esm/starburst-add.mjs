export const name="starburst-add";
export const id="dl_b8d1cec985de475d7a6a";
export const url=new URL("../icons/starburst-add.svg?v=56cc2a96994267a0f364f9befe6745611035197d13bf00eaa064be6c7e11d3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
