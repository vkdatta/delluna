export const name="text-cursor-input";
export const id="dl_520ff86bd8d948bd8b8d";
export const url=new URL("../icons/text-cursor-input.svg?v=bd040be3cf610e0c1636d5b551cc858278ed6352e1daaad9d52056a3bc0a4fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
