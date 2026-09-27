export const name="computer-tower-bold";
export const id="dl_d4c4ed1e52914805b0b6";
export const url=new URL("../icons/computer-tower-bold.svg?v=a88d60f011aac5116ce65884e512624a7b003f9827a2773e4a3f28273a6dab2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
