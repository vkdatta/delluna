export const name="crop-bold";
export const id="dl_d035d75e8e794ffc8399";
export const url=new URL("../icons/crop-bold.svg?v=bfb083fdbada658edd6cd47ac7d8d59ce289cc9bcf4436ff25e742512bce7619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
