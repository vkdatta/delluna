export const name="arrow-line-down-fill";
export const id="dl_545a4847048a42a4ad55";
export const url=new URL("../icons/arrow-line-down-fill.svg?v=7e36dd01a686278449499164c33eaedaa32dd30c8b3dec385131ca345c4050d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
