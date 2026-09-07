export const name="headlights-light";
export const id="dl_843c1a271533451fa3f9";
export const url=new URL("../icons/headlights-light.svg?v=2960b24c1741753e776a1b9b7023c98b8e59aecf95b40ccd4defab8993920cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
