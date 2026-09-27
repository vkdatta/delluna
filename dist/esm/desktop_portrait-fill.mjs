export const name="desktop_portrait-fill";
export const id="dl_728c73343788932b4c34";
export const url=new URL("../icons/desktop_portrait-fill.svg?v=ef46e0cd67a17e57c59709ab27af383ec6f7e28755a8cf90e05aa902211313cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
