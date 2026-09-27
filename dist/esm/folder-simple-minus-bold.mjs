export const name="folder-simple-minus-bold";
export const id="dl_68f52abf1d084c349ff3";
export const url=new URL("../icons/folder-simple-minus-bold.svg?v=e7c982ec89b17ab9bdcf4d8c2fae4d8fa14c4af770fcf23bf76b14e63e0889ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
