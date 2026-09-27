export const name="tornado-light";
export const id="dl_f434753e92e35a44fc46";
export const url=new URL("../icons/tornado-light.svg?v=9d9ce3fe17a3a1a0f1ae15d416af57b5a8905233a4879be615ba620420e83270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
