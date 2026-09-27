export const name="parking_sign";
export const id="dl_8be2acf2a5d4a83a329d";
export const url=new URL("../icons/parking_sign.svg?v=48050a0b9db6585e7759e5ad579331cf31cad6e0b1d0af5ff9db4cf6f2fbef1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
