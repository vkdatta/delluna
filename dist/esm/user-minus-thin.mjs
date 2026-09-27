export const name="user-minus-thin";
export const id="dl_3865e28661247ad2c196";
export const url=new URL("../icons/user-minus-thin.svg?v=5b202e9a08f777952c9a760b8fd42772bf4ebde0c82842326572bbe4a2bf0cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
