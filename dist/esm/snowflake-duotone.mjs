export const name="snowflake-duotone";
export const id="dl_cc0274e32e034a58baa6";
export const url=new URL("../icons/S/snowflake-duotone.svg?v=dc38b26c8a6f932a3f0bf9337e0f36678e052d8c757e051c92405d6819370985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
