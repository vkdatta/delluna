export const name="hash";
export const id="dl_b77ce5f84a2c4267861d";
export const url=new URL("../icons/hash.svg?v=23b791cf28bbef659239335c6b512c346da86abc6c469d23cc70bd2a8ffe4a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
