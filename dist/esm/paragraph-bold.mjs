export const name="paragraph-bold";
export const id="dl_526652a6fe554c67bcf2";
export const url=new URL("../icons/paragraph-bold.svg?v=148b633248350dc21f40faa955f15fdf0f51e9cbe1d104cb803ed05d54d41fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
