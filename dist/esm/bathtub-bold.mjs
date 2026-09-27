export const name="bathtub-bold";
export const id="dl_af3827934e6f4f7cace0";
export const url=new URL("../icons/bathtub-bold.svg?v=77e0cf5578f2f7e24fe755e6bd963d1a26f01df9b249f2a0f3cde3c81bf80ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
