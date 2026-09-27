export const name="dots-three-circle-duotone";
export const id="dl_b4d10c643b6a4b389dbc";
export const url=new URL("../icons/dots-three-circle-duotone.svg?v=4e02f4acb161c0d251cc149ebc51103866a90ab308bfd656e39cf5558ef597d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
