export const name="moped-front-light";
export const id="dl_ce66b4a736e645959760";
export const url=new URL("../icons/moped-front-light.svg?v=19b9674f5ee7a0354cedbc2e37e025d248f2ee78637b3c81ec3589a9d6bbae60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
