export const name="belt-fill";
export const id="dl_8f402f3d0fd44a83850b";
export const url=new URL("../icons/belt-fill.svg?v=fabb5c7a4bb3ba6daa98a5e0b7f2655c91d612e05fbb3dd7b1224d405daa9a82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
