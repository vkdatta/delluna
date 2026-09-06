export const name="meteor-duotone";
export const id="dl_08cbdb39a9254cf4b530";
export const url=new URL("../icons/meteor-duotone.svg?v=db3674d6f9a65dc5f138883b94d686e80a84e398b55473bd7d7f0875d8c0b8ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
