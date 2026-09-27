export const name="acorn-bold";
export const id="dl_be4fc717b866449fbcfd";
export const url=new URL("../icons/acorn-bold.svg?v=7e1656926dfac707c7096c9dddac10a23e34e685d6ca6d310cb9d136bf6632e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
