export const name="lucid_2-gallery-vertical";
export const id="dl_43d93edccbd44bbe9915";
export const url=new URL("../icons/lucid_2-gallery-vertical.svg?v=51401784104eed84f18a21687b262f9661c096e68952d9e401f8d68619a2f4b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
