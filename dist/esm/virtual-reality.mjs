export const name="virtual-reality";
export const id="dl_c600087a6743411fbf4c";
export const url=new URL("../icons/V/virtual-reality.svg?v=41d6e17ce38ba02e237365190d4e41571c63ae2ccf3558e0533e2bd60ec963c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
