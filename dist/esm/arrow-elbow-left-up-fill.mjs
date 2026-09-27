export const name="arrow-elbow-left-up-fill";
export const id="dl_89d5ff13ce164340a6a5";
export const url=new URL("../icons/arrow-elbow-left-up-fill.svg?v=bf7f52ae955cd3c272350212211d82935a47eb420a1375d87b0f37c333e96407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
