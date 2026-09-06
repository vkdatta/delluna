export const name="polygon";
export const id="dl_b78699541f7e4ddd96f1";
export const url=new URL("../icons/polygon.svg?v=584deb72bd1696b7370a742102216a0e63ca4ba5cc16d9edf0fff06ee350ba56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
