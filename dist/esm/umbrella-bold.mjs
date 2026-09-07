export const name="umbrella-bold";
export const id="dl_dd333b2e38634fdc8bce";
export const url=new URL("../icons/U/umbrella-bold.svg?v=cd6803ee61303fe2d161d6fbc2fb1723b065a1cfb06c568983d2b6187e778278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
