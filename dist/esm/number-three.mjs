export const name="number-three";
export const id="dl_006ed3b6eeb444699ba6";
export const url=new URL("../icons/number-three.svg?v=b38af49ee4de939b13ddb083b06e12816ebf3c2ef9d64419f23d23a151619f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
