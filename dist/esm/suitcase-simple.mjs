export const name="suitcase-simple";
export const id="dl_2894ea37def8ec784cc1";
export const url=new URL("../icons/suitcase-simple.svg?v=345551d7072cee51848bca7fc8e990077318b2892f55e6aab525386437465abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
