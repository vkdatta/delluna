export const name="slideshow";
export const id="dl_6dc0a7f37554439d9952";
export const url=new URL("../icons/S/slideshow.svg?v=dd2061f31a9acfcdbda9f51f53fdf6490884a1156f6f2859d41eab8ac2d37e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
