export const name="flip-vertical";
export const id="dl_b4b7b65d5c6d45e3921a";
export const url=new URL("../icons/flip-vertical.svg?v=b7f221927f6a6c2e48726e2396b2ef3c8898d83eb1232ff1ae8ced1fee0425ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
