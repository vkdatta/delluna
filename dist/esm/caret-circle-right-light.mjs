export const name="caret-circle-right-light";
export const id="dl_43970278ef5e484f939d";
export const url=new URL("../icons/caret-circle-right-light.svg?v=aba61f90291a1381cbe340c2489858b44d495914483cb78d22b632423925e131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
