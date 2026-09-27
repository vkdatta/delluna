export const name="flower-thin";
export const id="dl_4fffc55b1260490d9e14";
export const url=new URL("../icons/flower-thin.svg?v=45f06598ab4a501fd33c527e7d198b5f8726f6b1cfa845ed281b34518e73d3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
