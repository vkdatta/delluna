export const name="grains-slash-thin";
export const id="dl_b78f5c0af9dc48078dcd";
export const url=new URL("../icons/grains-slash-thin.svg?v=4dea5b94850b2454e699295d06c9d898ddaa83dd96a2dbee7a6b487f7b11e3e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
