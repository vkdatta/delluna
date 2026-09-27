export const name="tty";
export const id="dl_c2b1b5aa29709315539f";
export const url=new URL("../icons/tty.svg?v=722507d3f54edb3d900d44a9eb3015e7296a0bfca8faf7e65e7eab9db720cc02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
