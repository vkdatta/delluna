export const name="identification-card-duotone";
export const id="dl_66798e7867bb4338a71d";
export const url=new URL("../icons/identification-card-duotone.svg?v=4b9f6ca54bc29f91b21c9401ae2c64b49ca06188ed0a81190a40167ed7bf383b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
