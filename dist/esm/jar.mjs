export const name="jar";
export const id="dl_6e0e541cb5de4c50b21e";
export const url=new URL("../icons/jar.svg?v=e95d2453c7cb9ed1b87f0928be4dd01d2ff670c995b42d59e0931edf86a56519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
