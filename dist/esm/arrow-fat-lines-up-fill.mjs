export const name="arrow-fat-lines-up-fill";
export const id="dl_b4c84b335e8f4b4fac95";
export const url=new URL("../icons/arrow-fat-lines-up-fill.svg?v=f02d5fa6a297d7bf44c12fe49c8a1ed4ab91c30d5756be994beb33a6112aa3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
