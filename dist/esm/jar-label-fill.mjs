export const name="jar-label-fill";
export const id="dl_75ef0b3c177540889715";
export const url=new URL("../icons/jar-label-fill.svg?v=0a01c0531f09965030f8b09988c6e33cf6aa4b2cad73e2339d5f4ce3e4244d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
