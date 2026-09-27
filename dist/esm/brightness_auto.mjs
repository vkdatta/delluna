export const name="brightness_auto";
export const id="dl_900b36e139a7fa4ace23";
export const url=new URL("../icons/brightness_auto.svg?v=f24687b9fcae3b0c8287660a6912467b3e1ed22beafe1ede796fbb5f0261400a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
