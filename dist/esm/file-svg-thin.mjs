export const name="file-svg-thin";
export const id="dl_7b61f1244c854ede9e24";
export const url=new URL("../icons/file-svg-thin.svg?v=9b237c88a100053f0352a4d76a0fb11a099650bf1df9dfeb3634d5204e1ccd6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
