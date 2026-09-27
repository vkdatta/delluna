export const name="join_right";
export const id="dl_c9dfe329e15e2d890d9c";
export const url=new URL("../icons/join_right.svg?v=2709b597c114cfe4880456457cd2c3dd1650ea28dcfb6c8d85151b4f2341998c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
