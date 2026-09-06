export const name="ear-slash-light";
export const id="dl_0e37337e2e254b949aba";
export const url=new URL("../icons/ear-slash-light.svg?v=1d8e2c91a0ed630c9417afe5e6c09dc4118800442ee28aee2793ebe6d32e9a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
