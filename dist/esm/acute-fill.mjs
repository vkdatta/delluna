export const name="acute-fill";
export const id="dl_8b6957b5872740ccadbe";
export const url=new URL("../icons/acute-fill.svg?v=e987462bfc04d4a3b590e2b5bd3d7fd9cd2ddc02e3e4cff71efa9c70e6bd1829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
