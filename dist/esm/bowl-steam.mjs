export const name="bowl-steam";
export const id="dl_e9659e4f5be04821a5de";
export const url=new URL("../icons/bowl-steam.svg?v=6509e27512bcf802e42215ec601c7008bfd8193ce21d9d193354635c89901300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
