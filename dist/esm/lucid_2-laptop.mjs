export const name="lucid_2-laptop";
export const id="dl_e81313314c6348a09a9a";
export const url=new URL("../icons/lucid_2-laptop.svg?v=72e4d02c8f3dfa4410db601ada097c292a2aca114e9b0d74ae09f65f10fc714a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
