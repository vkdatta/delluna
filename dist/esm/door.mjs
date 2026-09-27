export const name="door";
export const id="dl_a30e4e65e2f747e29528";
export const url=new URL("../icons/door.svg?v=15ba96e970717efdbc7bc4ac8631ff876bece657aaef141c2564cb77f3c1fecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
