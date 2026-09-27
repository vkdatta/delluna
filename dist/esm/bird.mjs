export const name="bird";
export const id="dl_f9886e16770942b3be80";
export const url=new URL("../icons/bird.svg?v=4867b2df005186b597954e54fe1e6537e2f74d9b4c14b16d764c5b90e0ca4cff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
