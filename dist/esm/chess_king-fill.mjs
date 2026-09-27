export const name="chess_king-fill";
export const id="dl_e4d741aad5290808a7e5";
export const url=new URL("../icons/chess_king-fill.svg?v=cac54b5aa9cff6adf0fe5eebd4c79982ef3a99c3a6f11338b4f0a660a7fc5e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
