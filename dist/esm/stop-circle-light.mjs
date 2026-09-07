export const name="stop-circle-light";
export const id="dl_43ac71b7b5c84de5bd4c";
export const url=new URL("../icons/S/stop-circle-light.svg?v=234f31b60a1ca7e91f52db2ec74e53de003a9cf9ac77de43753e51fad6396f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
