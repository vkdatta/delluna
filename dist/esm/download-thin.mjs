export const name="download-thin";
export const id="dl_6f403cf34edd4136be2d";
export const url=new URL("../icons/download-thin.svg?v=ed91d48a1f06a5bf30282ce9dec1d7f09a9d7f767d2ae5f96abe88cc0887b281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
