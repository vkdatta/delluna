export const name="lucid_1-bone-fracture";
export const id="dl_5bfeea168fca42c1a777";
export const url=new URL("../icons/lucid_1-bone-fracture.svg?v=e5e0299c9cbc31e69eb29a7fc23cbbb87eb47c14f99b22e22d32c609e2746c17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
