export const name="iron-fill";
export const id="dl_11826fa08e2ba0f336e6";
export const url=new URL("../icons/iron-fill.svg?v=e72972acf8942b15b6657893666ec3d1f57d56600f4edf4b327679f99895599a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
