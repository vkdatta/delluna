export const name="run_circle";
export const id="dl_ad97d345e79da3118641";
export const url=new URL("../icons/run_circle.svg?v=d9638d8945b3d59ac443d7004916de5196d59d49bc9ad9633f280f689dd2575e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
