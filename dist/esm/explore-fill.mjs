export const name="explore-fill";
export const id="dl_faeb860044a0fd340262";
export const url=new URL("../icons/explore-fill.svg?v=1f216758b870df9db4959194f6a8885adee143ecc71d33153945dcc97b2749a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
