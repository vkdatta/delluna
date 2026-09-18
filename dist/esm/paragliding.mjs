export const name="paragliding";
export const id="dl_be0e4fa150ad458cb5ad";
export const url=new URL("../icons/paragliding.svg?v=073996474b58c56b903adb30488378fb54a63858e264e6ddc4dae9575fee386c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
