export const name="123";
export const id="dl_a5b48e1d6e33b2941fc4";
export const url=new URL("../icons/123.svg?v=405c4bcac62398abc077d90ae286026af3bd0259b6a3c254b66150a34e4c1e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
