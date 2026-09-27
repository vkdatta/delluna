export const name="sun-medium";
export const id="dl_bf68266431584d4e88b2";
export const url=new URL("../icons/sun-medium.svg?v=af327e5260002222d9cd088d668eec2dbc0efa2d07695932ae22e1e14a3baddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
