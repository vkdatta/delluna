export const name="lucid_2-eclipse";
export const id="dl_f9ab737aa01b4350ad34";
export const url=new URL("../icons/lucid_2-eclipse.svg?v=aee8c38ec7f6ff8aa17f06099db867d0fdebecf86e1d3c80b941624740950b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
