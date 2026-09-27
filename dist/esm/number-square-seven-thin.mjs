export const name="number-square-seven-thin";
export const id="dl_a994456c56cc4339a433";
export const url=new URL("../icons/number-square-seven-thin.svg?v=cbce422cf7f536a6d9484cc5b8382cbad3d9cc186b58010b51fd3c6916d56de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
