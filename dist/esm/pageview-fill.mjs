export const name="pageview-fill";
export const id="dl_31a55fb1f1ba84fc3da5";
export const url=new URL("../icons/pageview-fill.svg?v=d6bf4dc35b48cf2d1aa8239628dd9266a92b9a162282a4bc4d57a6e1df5902f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
