export const name="picture_in_picture_alt";
export const id="dl_fef6c3b5d698262f65e2";
export const url=new URL("../icons/picture_in_picture_alt.svg?v=8bdedaad7ca88c49bb21fe456fc0ac089b9219fc512e06924c494899da52bff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
