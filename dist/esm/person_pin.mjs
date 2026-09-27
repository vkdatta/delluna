export const name="person_pin";
export const id="dl_e5f3408fccf29c50c9d2";
export const url=new URL("../icons/person_pin.svg?v=b7b6eef202eae61387c743400b9db79f636e7ace34eb2003ad5605396f48cc97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
