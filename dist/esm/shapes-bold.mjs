export const name="shapes-bold";
export const id="dl_d3e4de287e9c0df4ff62";
export const url=new URL("../icons/shapes-bold.svg?v=ae7253247835d2e2da8369d713fd2afde950bf765a5d45a44e8de80508b70d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
