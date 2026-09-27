export const name="seal-duotone";
export const id="dl_61de90b32c5cda9c81e2";
export const url=new URL("../icons/seal-duotone.svg?v=98623df2c54096f7d9a0c450cdd0c3b7aae9edaf54e3ab6908efea9acf33fc31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
