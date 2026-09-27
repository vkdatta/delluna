export const name="webcam-bold";
export const id="dl_a52376640ab05b31c2bb";
export const url=new URL("../icons/webcam-bold.svg?v=75eee47b6f47922fa7a29fc02683f732d7bbd3a0a3ae496af3341ab47e80c7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
