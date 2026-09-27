export const name="align_vertical_alt";
export const id="dl_bf11e61066a165d677a7";
export const url=new URL("../icons/align_vertical_alt.svg?v=b2dd047e4cb0d0fc3020b29b535e81077f7f2036acc31643577eb7ce71940d03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
