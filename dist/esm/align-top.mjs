export const name="align-top";
export const id="dl_7255c99874c54985bd58";
export const url=new URL("../icons/align-top.svg?v=692ca128a205d864ef5f259298e1e89a7836cd5016de7f90ea45a54f9788153f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
