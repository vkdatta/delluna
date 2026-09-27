export const name="notepad-light";
export const id="dl_29969a5b2ce7441cbb44";
export const url=new URL("../icons/notepad-light.svg?v=6b4578db6c486ad4b038bbb24035566b390c557e757cdad4e4f48ed47479873f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
