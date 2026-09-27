export const name="copyleft-thin";
export const id="dl_4923619b744a45ec9967";
export const url=new URL("../icons/copyleft-thin.svg?v=2145f541e626d22ac8f7f7beb571f764c15b243fced6276f50cfe399bfcdd0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
