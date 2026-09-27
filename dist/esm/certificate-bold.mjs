export const name="certificate-bold";
export const id="dl_2d658eea935c42f385ab";
export const url=new URL("../icons/certificate-bold.svg?v=4902cb29cd2158a05e7aa642c8f0121ecf655f5fcbae3ec06ad72799ce17cd7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
