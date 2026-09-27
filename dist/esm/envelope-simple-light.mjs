export const name="envelope-simple-light";
export const id="dl_4cd7ec9e9eab440d8097";
export const url=new URL("../icons/envelope-simple-light.svg?v=22b6de87eb4d4f91dd874f0eb2cf729f682cabfe7a9cd43efb8f69eeb2153abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
