export const name="mouse-light";
export const id="dl_7edebc1741654673951b";
export const url=new URL("../icons/mouse-light.svg?v=a53d0640a621735fc23a04577f9aafbe21b7f89a44476e08fb760e808ad137ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
