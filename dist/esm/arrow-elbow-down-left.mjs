export const name="arrow-elbow-down-left";
export const id="dl_34a779d9c393480192dc";
export const url=new URL("../icons/arrow-elbow-down-left.svg?v=667d82b68aee2d7823efee351164ece1f22194506b645a65ecd9b9ba947c9985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
