export const name="caret-line-left-light";
export const id="dl_be747e09edcf48a8a790";
export const url=new URL("../icons/caret-line-left-light.svg?v=569b97ae170bea4099543427b221bb93693b411f10682945f43f5bd53e09d651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
