export const name="game_stick_right";
export const id="dl_a07f4956b28447369245";
export const url=new URL("../icons/game_stick_right.svg?v=aa89bd8a3b4ae0ab5eabeb7e9f832a34bf6c6fc0dc838e5855ead752be26fc52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
