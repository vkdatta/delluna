export const name="park-light";
export const id="dl_d7375ba0e2f6450cb4c9";
export const url=new URL("../icons/park-light.svg?v=87a0351baf265ccd67f581e87b9135883e1466effa71a56112cff2d667a5b0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
