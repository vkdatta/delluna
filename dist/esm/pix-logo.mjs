export const name="pix-logo";
export const id="dl_67ee8d6e187a4e928d9d";
export const url=new URL("../icons/pix-logo.svg?v=895918b83b7e885615870a4ccf0be941989631d26e48b0a5ae32b46aacb73c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
