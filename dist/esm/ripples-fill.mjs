export const name="ripples-fill";
export const id="dl_3da31bbb3a920447a109";
export const url=new URL("../icons/ripples-fill.svg?v=41bcb3a2cb70888a5ffbe274f375bf2fd9e32f071de07240a663d65e58bce979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
