export const name="meta-logo-thin";
export const id="dl_75e5d9425b0e4bbbbce4";
export const url=new URL("../icons/meta-logo-thin.svg?v=4e6928f659b8b90a01db860f6acf0cc42236b9ee6d8ca2c9df8fe42c15a0ab5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
