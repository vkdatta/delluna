export const name="kid_star";
export const id="dl_f627bc08227e444fb15b";
export const url=new URL("../icons/kid_star.svg?v=6c749ff0b3d458ce12f85eec67ddf8ef1fbe4c10bdf8bdf3c7bfc249b174b3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
