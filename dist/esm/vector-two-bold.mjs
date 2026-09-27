export const name="vector-two-bold";
export const id="dl_03c6a6aeeef267dd1b65";
export const url=new URL("../icons/vector-two-bold.svg?v=f2d29f8c54a146d11a25e63c46b030f3ca197457d1b2b76660e7669224c3c76c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
