export const name="google-drive-logo-thin";
export const id="dl_42bf6d02e6124ea480a9";
export const url=new URL("../icons/google-drive-logo-thin.svg?v=130b8e0b9a50b3c54c7c76c243a29e870861eebe8432cc71e34dbf5c48beb220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
