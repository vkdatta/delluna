export const name="bulldozer-light";
export const id="dl_7ce6c8be6e3940c68da9";
export const url=new URL("../icons/bulldozer-light.svg?v=9374298d1e2da40042ab37520085c9a98b116e0f05bd6ca1309fa617ab253acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
