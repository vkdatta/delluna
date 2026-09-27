export const name="puzzle-piece";
export const id="dl_6ced78f09ef3494a93c5";
export const url=new URL("../icons/puzzle-piece.svg?v=4981bf94c57809017cdceb4786326409b92f714d4bcb68312a72ba8e9da9ec45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
