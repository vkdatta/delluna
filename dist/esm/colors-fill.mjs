export const name="colors-fill";
export const id="dl_463b1832bd40ecf3ff99";
export const url=new URL("../icons/colors-fill.svg?v=a18bfd8844986733e432d4bef58d870058343e49688940af6b59745b765b80be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
