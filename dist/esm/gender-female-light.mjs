export const name="gender-female-light";
export const id="dl_31af3578ac174b4db456";
export const url=new URL("../icons/gender-female-light.svg?v=3dd3eae2a2d127b02f658a6f413223c5dc4d724e5eaa4c53b2f1e1aed81227a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
