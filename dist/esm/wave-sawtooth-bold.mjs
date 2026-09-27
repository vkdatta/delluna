export const name="wave-sawtooth-bold";
export const id="dl_8d9b7751eedfdb11d348";
export const url=new URL("../icons/wave-sawtooth-bold.svg?v=9a65197a0595ef9cbdc809549e7ea51982f47bbc9d49d82a23bec38ff108ecba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
