export const name="share-fat-light";
export const id="dl_2857d534df3948ecb025";
export const url=new URL("../icons/S/share-fat-light.svg?v=e204b05697e382d14caaa56037da79ba3d18ae4c1ada49077f0ed8c63c374b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
