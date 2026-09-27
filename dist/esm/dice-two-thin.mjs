export const name="dice-two-thin";
export const id="dl_a95a74412d1b46af8934";
export const url=new URL("../icons/dice-two-thin.svg?v=578fd979fc4f46fdf94d5a3020201caa60818adf69a5402ef7fafb30ca42b734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
