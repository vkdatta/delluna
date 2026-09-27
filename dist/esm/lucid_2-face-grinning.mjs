export const name="lucid_2-face-grinning";
export const id="dl_d8ca2443b3f44ca69881";
export const url=new URL("../icons/lucid_2-face-grinning.svg?v=ebca5861502c22fe2f6a27a1fc0d21e62dfc34937f6ba1216bc57314f4e80483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
