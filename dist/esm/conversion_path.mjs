export const name="conversion_path";
export const id="dl_43a7ba7227a74709ac89";
export const url=new URL("../icons/conversion_path.svg?v=6ba8954fbd5cced1f3d3ae4bb992fd5a0983083badaf7fff07ec20d4db6fc9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
