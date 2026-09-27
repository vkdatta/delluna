export const name="lucid_3-proportions";
export const id="dl_c7d97a87897f430eb2c1";
export const url=new URL("../icons/lucid_3-proportions.svg?v=3e8627e8c86bd7f4340418aeef5321043afd4075e38e0cbfdb9d15ba2d4d7c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
