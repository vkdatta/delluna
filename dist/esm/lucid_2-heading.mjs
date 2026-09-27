export const name="lucid_2-heading";
export const id="dl_3a3f86cfea034fe1a4d1";
export const url=new URL("../icons/lucid_2-heading.svg?v=81933997f75059215de1a263ee379a20a1d76ad2cae7a4da7c25435813d8709a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
