export const name="home_storage_gear-fill";
export const id="dl_1d9e08b65c3948678b6c";
export const url=new URL("../icons/home_storage_gear-fill.svg?v=d8b191611337e402ae89b6f4cb9312183382b44e53c7f7fb371189942c9bc5c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
