export const name="arrow-fat-line-up-bold";
export const id="dl_d8660bbb3b0c45c79851";
export const url=new URL("../icons/arrow-fat-line-up-bold.svg?v=86607bcb8abab58a4d1b8788482791df9877e9deda024b873588bcd8f7535e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
