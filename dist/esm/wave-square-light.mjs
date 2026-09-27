export const name="wave-square-light";
export const id="dl_474316d7b7b5aeac05d6";
export const url=new URL("../icons/wave-square-light.svg?v=685ef0be9a7d063a4c9bf8c017979bb21eeb285629e2444e72a353668091d971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
