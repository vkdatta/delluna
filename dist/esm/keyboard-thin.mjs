export const name="keyboard-thin";
export const id="dl_e9d74cfcf2f042c78db6";
export const url=new URL("../icons/keyboard-thin.svg?v=101eac3fdfd29e9b53faadcbc94d3a2945ada6239edf0ac4769cf9f4dd4c0ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
