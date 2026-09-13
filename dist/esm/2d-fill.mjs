export const name="2d-fill";
export const id="dl_14f33cbf92b4492b833e";
export const url=new URL("../icons/2/2d-fill.svg?v=bc37d9274a8a7550ff069080a05abae3c9b77f989fd77fbfce56f0ab0675a1dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
