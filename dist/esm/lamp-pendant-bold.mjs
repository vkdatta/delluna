export const name="lamp-pendant-bold";
export const id="dl_b2c4d18b3e724dc0a8bd";
export const url=new URL("../icons/lamp-pendant-bold.svg?v=c91701e716f84f3ddd1b2c75547094552779bde9d3c9dd99c5f3b2fa88feee81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
