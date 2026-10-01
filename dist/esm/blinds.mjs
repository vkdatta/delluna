export const name="blinds";
export const id="dl_a207ffc1b0be55f7d4a2";
export const url=new URL("../icons/blinds.svg?v=a97ae067acc29cd3d7525fbba806fcfc6f88aad032d1a1b16e60baf23cfeeae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
