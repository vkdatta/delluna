export const name="traffic-cone-light";
export const id="dl_952ec743db7b9446dcb8";
export const url=new URL("../icons/traffic-cone-light.svg?v=8683bb3696f9b6b49ee934fc2d804a87fdf2993cd348c9fcdfd495ccbe059e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
