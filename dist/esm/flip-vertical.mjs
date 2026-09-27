export const name="flip-vertical";
export const id="dl_b4b7b65d5c6d45e3921a";
export const url=new URL("../icons/flip-vertical.svg?v=e9f229abecf3089e40d2dc3ab799dc0705dc36f6e104c562e0eb1d271d83ab9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
