export const name="acorn-bold";
export const id="dl_be4fc717b866449fbcfd";
export const url=new URL("../icons/acorn-bold.svg?v=1120d9fa8d5956323f0fbaa27f45960e20731fdc7a0ff13a02e25e825a688680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
