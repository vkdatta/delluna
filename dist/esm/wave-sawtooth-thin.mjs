export const name="wave-sawtooth-thin";
export const id="dl_8efc8ac834224e7fa901";
export const url=new URL("../icons/W/wave-sawtooth-thin.svg?v=eec5c8dd7556315f88da68555a20fbaf6c7d071d207421d9a3ade3731aff26d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
