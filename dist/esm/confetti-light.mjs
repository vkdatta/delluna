export const name="confetti-light";
export const id="dl_28eeb3bfa2d14b24a3d3";
export const url=new URL("../icons/confetti-light.svg?v=5355716ed642d46bef629fc6aac75811f04c6ca089b64b38bc2a980c38cd39df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
