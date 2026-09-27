export const name="personal_places";
export const id="dl_89cfdc6e286d5b367a65";
export const url=new URL("../icons/personal_places.svg?v=ad8927f078761eb66d2f540015d5a22899acdf0e5a8377bad460e5ddd37da7ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
