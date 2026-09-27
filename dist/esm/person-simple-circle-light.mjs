export const name="person-simple-circle-light";
export const id="dl_31d86dd0e516494eb6cd";
export const url=new URL("../icons/person-simple-circle-light.svg?v=3bf08a87bceff2467808a8400cf6ee62d2d4d8080122fc0bb965b4b06de7b6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
