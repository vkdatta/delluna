export const name="number-circle-one";
export const id="dl_d2d40c3c5af64b1a960d";
export const url=new URL("../icons/number-circle-one.svg?v=083b3e1441c20721fbbc4a7a56773d777b67e615eeb2aaec001a7084a0611172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
