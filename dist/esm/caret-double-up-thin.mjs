export const name="caret-double-up-thin";
export const id="dl_b67ad56b64d146eaa7d8";
export const url=new URL("../icons/caret-double-up-thin.svg?v=76ee0c92d41311e1fdf5c7b4530698e92dfbce9fcc8f70e07e702f89841ce994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
