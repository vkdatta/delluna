export const name="collapse";
export const id="dl_5d1421395f2645187c5d";
export const url=new URL("../icons/collapse.svg?v=29e45683c6f819fb3b7944d5fa0909e917d22246f0bfeeb09b1335045e6dd134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
