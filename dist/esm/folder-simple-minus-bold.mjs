export const name="folder-simple-minus-bold";
export const id="dl_68f52abf1d084c349ff3";
export const url=new URL("../icons/folder-simple-minus-bold.svg?v=ce2d84e07fc7fec3e4528f06ccb2aa18f9e22197a4159a99bc9b325d37722b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
