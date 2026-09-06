export const name="arrow-square-right-bold";
export const id="dl_815e066e948f4fab9750";
export const url=new URL("../icons/arrow-square-right-bold.svg?v=63d1f90ec701d2ee7e32bf93ad8ffcd1b00955aab06588595506c0e55d4c690b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
