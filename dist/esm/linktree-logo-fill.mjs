export const name="linktree-logo-fill";
export const id="dl_c78aa162107148c38aa4";
export const url=new URL("../icons/linktree-logo-fill.svg?v=162c982f6d17553203958bf730eb8223452ef6dba3fc5cb7f5bf21b3d2dab10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
