export const name="volleyball";
export const id="dl_03691b0b81d247fd8b83";
export const url=new URL("../icons/volleyball.svg?v=077382e0f0345b67e0720ba1e4b3900938e7e7c2e23471ea2cd60d7d3c33a643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
