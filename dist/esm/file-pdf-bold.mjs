export const name="file-pdf-bold";
export const id="dl_e4b7689e1acf4b779157";
export const url=new URL("../icons/file-pdf-bold.svg?v=e5a5e27e924e4f2e6f586dc53cd38e9d29be52a9a56da1572737e34eefac1b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
