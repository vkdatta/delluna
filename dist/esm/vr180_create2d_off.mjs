export const name="vr180_create2d_off";
export const id="dl_0538f27e89b46ded6a48";
export const url=new URL("../icons/vr180_create2d_off.svg?v=126d97c4b74ddeee54c76241b55ba1e5b80d359f1b8462f41ee24f353f0654a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
