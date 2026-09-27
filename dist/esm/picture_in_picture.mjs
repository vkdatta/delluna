export const name="picture_in_picture";
export const id="dl_70c6d9653c2ee25a3a11";
export const url=new URL("../icons/picture_in_picture.svg?v=477efa10c75dc1f6585cef94a612a36235590395360262095c0bb08d7497b39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
