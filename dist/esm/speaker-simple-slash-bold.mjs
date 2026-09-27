export const name="speaker-simple-slash-bold";
export const id="dl_47a0850dc7547af176ad";
export const url=new URL("../icons/speaker-simple-slash-bold.svg?v=3b114c8ea427d9b61195a5e1210322f9379dab33f9623240b17042d0a9735759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
