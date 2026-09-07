export const name="bulldozer-light";
export const id="dl_7ce6c8be6e3940c68da9";
export const url=new URL("../icons/bulldozer-light.svg?v=06e2f428017da213be4dc01beb92e02258c482a1dd86f89b3bc0d1be1656ee7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
