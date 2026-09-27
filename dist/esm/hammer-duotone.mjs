export const name="hammer-duotone";
export const id="dl_c45c2ba3eecb402f9da3";
export const url=new URL("../icons/hammer-duotone.svg?v=99fdf8d81dde1c42cf108a4c1dbe6db2d009645ae8ea737f2709904f535faf2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
