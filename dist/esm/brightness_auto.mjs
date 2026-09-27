export const name="brightness_auto";
export const id="dl_76b1d336922151997947";
export const url=new URL("../icons/brightness_auto.svg?v=82377215c0f28ac65f6763fb72794367475a21d8162c9f3dc98ab43c764e1594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
