export const name="equalizer-light";
export const id="dl_d9e1a01c0ca447cc8a47";
export const url=new URL("../icons/equalizer-light.svg?v=37c7ea8529b5be8ecb6b0a6232e4397d48ed6ef501f842769aed06fdaa5c845e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
