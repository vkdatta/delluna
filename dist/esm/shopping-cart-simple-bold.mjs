export const name="shopping-cart-simple-bold";
export const id="dl_3ce919ba3c65a4bd54ff";
export const url=new URL("../icons/shopping-cart-simple-bold.svg?v=5a9f1069c5fd13d920d92b489803303cf7b63caf08c83392cff607b4d01e33a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
