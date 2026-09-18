export const name="transform-fill";
export const id="dl_3d302b4e82d44f0e8ef5";
export const url=new URL("../icons/transform-fill.svg?v=c0d2f82d8b415d3bbaadf7f8eec8b8e1e47719d4b1f0888f7c74f44d31e705ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
