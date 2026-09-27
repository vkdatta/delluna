export const name="hash";
export const id="dl_b77ce5f84a2c4267861d";
export const url=new URL("../icons/hash.svg?v=2ca6d8c000c7402e1ee96a94585a5f38210e53f29e04c8ef1944cc6701bcb3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
