export const name="lucid_1-clock-4";
export const id="dl_f90b8976ca1540b8bf3f";
export const url=new URL("../icons/lucid_1-clock-4.svg?v=d0d9b4611d8fed6a94005c0eb73fad7d814e02b37e561faec8abed87c210625f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
