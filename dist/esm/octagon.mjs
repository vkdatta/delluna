export const name="octagon";
export const id="dl_34b6d5c65b2d473caf27";
export const url=new URL("../icons/octagon.svg?v=bea89bb1da682d7826cea1a27146976513d2cefc8903e4f6524298e633af9fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
