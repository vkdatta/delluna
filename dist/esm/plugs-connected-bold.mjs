export const name="plugs-connected-bold";
export const id="dl_e89ea443828946c6b2d7";
export const url=new URL("../icons/plugs-connected-bold.svg?v=de70a55ab584082a2ed59bcbf3caffc42fff00731393de6b8da4b69eecfc87af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
