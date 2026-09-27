export const name="lucid_1-arrow-big-right-dash";
export const id="dl_eae131305fdd4d4e9a23";
export const url=new URL("../icons/lucid_1-arrow-big-right-dash.svg?v=0150a2b777706d6114206e49507ccd9cb7e721b65e0e391fd124665cb996bb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
