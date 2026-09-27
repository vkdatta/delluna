export const name="auto_awesome_mosaic-fill";
export const id="dl_8ab9217e812753021bc0";
export const url=new URL("../icons/auto_awesome_mosaic-fill.svg?v=74c70f72148cda35adb91010b4292a84398f60c995afa4e00fc3d0fc68165432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
