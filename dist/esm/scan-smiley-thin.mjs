export const name="scan-smiley-thin";
export const id="dl_2fae38fa39274203b6f6";
export const url=new URL("../icons/S/scan-smiley-thin.svg?v=bd160e06ed728fd76af7d196b5164f25f67769e4f879d6ab719f0caed7f4829f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
