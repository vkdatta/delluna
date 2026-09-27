export const name="speaker-slash-light";
export const id="dl_6c3d1b4bc661253b3b9c";
export const url=new URL("../icons/speaker-slash-light.svg?v=f8d11b47eb6bb2d757229b1b78e32af342695c6a0780e8a4fb1ec43216e5cefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
