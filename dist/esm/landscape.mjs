export const name="landscape";
export const id="dl_dcfedfcbb2c0feac18b5";
export const url=new URL("../icons/landscape.svg?v=9fdf59179a73f516568ca6f917194ef2a51235c329ea9e0c75debd19da680e7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
