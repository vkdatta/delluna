export const name="lucid_3-pointer-off";
export const id="dl_43c70b0349ea40cc825f";
export const url=new URL("../icons/lucid_3-pointer-off.svg?v=e646498509f36b81d029b9981e7f5cce96e801cd81a833ea0eebace963bd705d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
