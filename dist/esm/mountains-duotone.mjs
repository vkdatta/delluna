export const name="mountains-duotone";
export const id="dl_4b1d452ac4174bdeae8c";
export const url=new URL("../icons/mountains-duotone.svg?v=0574db0c016e3710f7926525070be0f709e2f53b3f6e437f3e6cda7c08e080b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
