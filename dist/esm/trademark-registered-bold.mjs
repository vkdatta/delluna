export const name="trademark-registered-bold";
export const id="dl_81362871249a41308b8c";
export const url=new URL("../icons/T/trademark-registered-bold.svg?v=87089d6cc6f265bf9a56afa9dbf3cedbab0247e92e5cf6990f232b48b074a42c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
