export const name="lucid_2-door-stairwell";
export const id="dl_757ee530cc324a02a8c6";
export const url=new URL("../icons/lucid_2-door-stairwell.svg?v=9db2366ccb620e2796191372a266a5423d23724f1e5c726285cea4be28c473fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
