export const name="flip-vertical-light";
export const id="dl_df7a9e1514d14a00bd6e";
export const url=new URL("../icons/flip-vertical-light.svg?v=d151bffdfb31b433b7efbaa2b2a589a8aa6b133c0721b0c93da49119f22e5a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
