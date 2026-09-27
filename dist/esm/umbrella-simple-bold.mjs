export const name="umbrella-simple-bold";
export const id="dl_c9652669bec2a9bd016d";
export const url=new URL("../icons/umbrella-simple-bold.svg?v=00f3bf6086933d785c3a03e45adca8b00b061b9be5347f3951057bfe95fb15db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
