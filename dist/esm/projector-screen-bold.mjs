export const name="projector-screen-bold";
export const id="dl_5d33df8876744ae6a813";
export const url=new URL("../icons/projector-screen-bold.svg?v=17123d215d7b5b16db20a86d46a4f12db2745fef42cac583de2465b4d9ca66fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
