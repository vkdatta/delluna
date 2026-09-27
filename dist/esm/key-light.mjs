export const name="key-light";
export const id="dl_19c6e2758d41471ebac8";
export const url=new URL("../icons/key-light.svg?v=7138e147c16c1518ce74d4ca4d4ed8e0990bc107b7c0db5a2d9abe902c946fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
