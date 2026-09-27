export const name="umbrella-simple-bold";
export const id="dl_2584b037c71fd97f5e2b";
export const url=new URL("../icons/umbrella-simple-bold.svg?v=cc0b4a223d7def86ff4c841172e01d5f1fb0ce1c1422968e6a42dedf84ef96d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
