export const name="chalkboard-simple-thin";
export const id="dl_e29f1a5156e3418ca650";
export const url=new URL("../icons/chalkboard-simple-thin.svg?v=189567d071b25b5bac8fb6667974c4ddd55b561bd4c7d99e19cd21f29f8274d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
