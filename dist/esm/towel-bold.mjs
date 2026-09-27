export const name="towel-bold";
export const id="dl_316916b3995dc07826fb";
export const url=new URL("../icons/towel-bold.svg?v=91777a0c34bfa01e88fdf80541028aedcdc201f99ae4c748562c30b41345be5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
