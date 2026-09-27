export const name="lucid_2-images";
export const id="dl_3fc237b8dcc0486999e0";
export const url=new URL("../icons/lucid_2-images.svg?v=7c16d5c97fecd6a6a13e55baa0b2494390f3a684bd121fe543235ff8b131355f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
