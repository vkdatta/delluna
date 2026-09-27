export const name="crop-bold";
export const id="dl_d035d75e8e794ffc8399";
export const url=new URL("../icons/crop-bold.svg?v=46c91e5c7892e64d4a891cd22f08bd9914acc95c59cb06214c6a9149fe9db5e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
