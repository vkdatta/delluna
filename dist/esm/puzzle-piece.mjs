export const name="puzzle-piece";
export const id="dl_6ced78f09ef3494a93c5";
export const url=new URL("../icons/puzzle-piece.svg?v=74bd28de45d5adf55be89ee791849666596c18e95d108f4b03c7a2faf7215325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
