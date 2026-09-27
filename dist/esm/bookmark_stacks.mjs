export const name="bookmark_stacks";
export const id="dl_f8a69b35d119dbff7ea1";
export const url=new URL("../icons/bookmark_stacks.svg?v=5abd043a9dda1dc0c64049f32122c1d004b50c36d6c988b724664363d0c9a74d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
