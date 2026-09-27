export const name="lucid_1-circle-dot-dashed";
export const id="dl_5e4c5c6df8b148528bc3";
export const url=new URL("../icons/lucid_1-circle-dot-dashed.svg?v=a31fdef29ce9f4fd75773d5402a36b129df64437ac8dc001cd5e88df910ce33d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
