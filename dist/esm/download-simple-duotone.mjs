export const name="download-simple-duotone";
export const id="dl_c5e2af5fbee34c659bb3";
export const url=new URL("../icons/download-simple-duotone.svg?v=68ffe027868f3e33b2788d5cc246dbcb47a86f210b39a2866ab7e2d1cddee9a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
