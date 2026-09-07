export const name="hand-tap-duotone";
export const id="dl_997c20a812124cea8d27";
export const url=new URL("../icons/hand-tap-duotone.svg?v=3cfc0b704af3b9dbdc6c83fad3ac1ae651859b933f4a29861da3f18d6398e66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
