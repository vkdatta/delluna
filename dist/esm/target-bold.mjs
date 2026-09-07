export const name="target-bold";
export const id="dl_5f304d47ca354aceb3f6";
export const url=new URL("../icons/T/target-bold.svg?v=9858ed99bfe1ba4027291aed9dc7ee2073030cf5caf3397b802c1fd890c0be24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
