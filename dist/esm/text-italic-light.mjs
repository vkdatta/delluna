export const name="text-italic-light";
export const id="dl_2955f60686b54861d91f";
export const url=new URL("../icons/text-italic-light.svg?v=df20f204529ee776e539a39cc5c22db58a2a1eec882fb4aa2caf4c25e24bbbef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
