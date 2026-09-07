export const name="user-square-bold";
export const id="dl_aac4892cff1848608b21";
export const url=new URL("../icons/U/user-square-bold.svg?v=62c1b3980f0bade2078f47b84366dbda191644c75e64651dda04d0be08d3e085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
