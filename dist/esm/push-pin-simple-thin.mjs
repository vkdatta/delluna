export const name="push-pin-simple-thin";
export const id="dl_68106e9319bd4ceb8057";
export const url=new URL("../icons/push-pin-simple-thin.svg?v=0991777c61e1c49cc241aa037d1c65cfad69d0fde297e157ad01f3c5fb8163cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
