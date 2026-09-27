export const name="eyes-light";
export const id="dl_ec0d968ba0394c6bbc49";
export const url=new URL("../icons/eyes-light.svg?v=3dc516a5bc161737e70522babc8eef41dfefc2267431fe7dc22c5fa414c73b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
