export const name="number-square-four-bold";
export const id="dl_b1b591250f4044c19483";
export const url=new URL("../icons/number-square-four-bold.svg?v=3f6c4ac9ae676f8bd2fdc09f1c11315a646aa95224a459816075d42d2c4fce4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
