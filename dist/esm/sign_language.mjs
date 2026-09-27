export const name="sign_language";
export const id="dl_4f31dd62c1b1a2da99b3";
export const url=new URL("../icons/sign_language.svg?v=7d3b2d1f9f9a88df0732dbe86af6728b2608658c4233dd5750f915444c68be3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
