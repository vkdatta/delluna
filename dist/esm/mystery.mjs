export const name="mystery";
export const id="dl_5e641a39b011bac456f7";
export const url=new URL("../icons/mystery.svg?v=a2d0e6c74062b795cc003b1d8745d6efe9d47a8f34480ae775a071f6ebdaa2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
