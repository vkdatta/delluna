export const name="nest_display_max";
export const id="dl_d5fd9f25fd23d922e8ca";
export const url=new URL("../icons/nest_display_max.svg?v=01d9a0ec4b461a274f4ca96bcdb710caa73f59c50c44c0cf6c922f2e271447de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
