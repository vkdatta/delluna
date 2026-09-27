export const name="refresh";
export const id="dl_f6c916e487c51cb4197d";
export const url=new URL("../icons/material_symbols/refresh.svg?v=e56d7ee330abd6d410cca7778419c524cebacf300c3b6e1b97ca9d0f3c3c1f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
