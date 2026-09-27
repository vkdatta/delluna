export const name="acorn-bold";
export const id="dl_be4fc717b866449fbcfd";
export const url=new URL("../icons/acorn-bold.svg?v=20c4c547df1c2d9d90fb9ea0ea4938c38866e751d96aa20b328de56a5eef1111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
