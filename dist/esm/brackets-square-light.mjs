export const name="brackets-square-light";
export const id="dl_d84a27d993cb479e9a46";
export const url=new URL("../icons/brackets-square-light.svg?v=78c867f820ea9550660732ae7483fa83f9a7948783536a6dd5971da7e6586acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
