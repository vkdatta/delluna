export const name="rectangle-dashed-light";
export const id="dl_3255dfef624b43528139";
export const url=new URL("../icons/rectangle-dashed-light.svg?v=bfb1d4a4d88c613ede92f665635e9210c90e681eee5b2407b63438a23cd0ece2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
