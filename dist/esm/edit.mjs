export const name="edit";
export const id="dl_900a88c049a8b61654b6";
export const url=new URL("../icons/edit.svg?v=f7ede28972f53d102871649ec90a7002464fb1b2785e6215aa6760158037a9a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
