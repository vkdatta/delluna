export const name="cylinder-duotone";
export const id="dl_81aa91dbe0fd45bebf2b";
export const url=new URL("../icons/cylinder-duotone.svg?v=56247c926956cf70aa3a97d22421598e629d387cf7add4fa69d105848fcb002b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
